import { ClipboardPenIcon, Trash2Icon } from "lucide-react";
import DashHead from "../../../components/DashHead";
import useGetEvents from "../../../hooks/useGetEvents";
import { TEvents } from "../../Home/Events/events.type";
import AddNewEvent from "./AddNewEvent";
import UpdateEvent from "./UpdateEvent";
import Swal from "sweetalert2";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const ManageEventItems = () => {
    const { allEvents } = useGetEvents();
    const queryClient = useQueryClient();

    const { mutateAsync } = useMutation({
        mutationFn: async (id) => {
            await axios.delete(`https://event360-backend.vercel.app/api/v1/delete-events/${id}`)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['all-events'] });
            Swal.fire({
                title: "Deleted!",
                text: "Your event has been deleted.",
                icon: "success"
            });
        }
    })

    const handleDeleteEvent = async (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await mutateAsync(id);
            }
        });

    }
    return (
        <section>
            <DashHead title="Manage Event Items" />


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allEvents?.map((event: TEvents) => <tr key={event?._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={event?.image} alt="Recent Event" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-nowrap">{event?.event_name}</div>
                                        </div>
                                    </div>
                                </td>
                                <th className="flex items-center gap-4">
                                    <label htmlFor={event?._id} className="px-2 py-1 rounded bg-success text-white border border-success hover:bg-transparent hover:text-success transition-all duration-300 cursor-pointer"><ClipboardPenIcon /></label>
                                    <button onClick={() => handleDeleteEvent(event?._id)} className="px-2 py-1 rounded bg-red-600 text-white border border-red-600 hover:bg-transparent hover:text-red-600 transition-all duration-300"><Trash2Icon /></button>
                                </th>

                                <th>
                                    <div>
                                        <input type="checkbox" id={event?._id} className="modal-toggle" />
                                        <div className="modal" role="dialog">
                                            <div className="modal-box relative">
                                                <UpdateEvent event={event} />
                                                <div className="modal-action absolute top-0 right-3">
                                                    <label htmlFor={event?._id} className="cursor-pointer"> <svg className="fill-neutral hover:fill-error transition-all duration-300" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>

            <div className="pr-2">
                <AddNewEvent />
            </div>
        </section>
    );
};

export default ManageEventItems;