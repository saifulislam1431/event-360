import { FieldValues, useForm } from "react-hook-form";
import { UploadCloud, UploadCloudIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import { TEvents } from "../../Home/Events/events.type";
import DashHead from "../../../components/DashHead";

const token = import.meta.env.VITE_IMAGE_TOKEN;

interface TFormDataType {
    event_name: string,
    image: string,
}
const UpdateEvent = ({ event }: { event: TEvents }) => {
    const [isImageChange, setChangeIsImageChange] = useState(false)

    const hosting_url = `https://api.imgbb.com/1/upload?key=${token}`
    const { register, formState: { errors }, handleSubmit, reset, formState } = useForm();


    const queryClient = useQueryClient();

    const { mutateAsync, isSuccess, isError } = useMutation({
        mutationFn: async (data: TFormDataType) => {
            return await axios.patch(`http://localhost:5000/api/v1/update-events/${event?._id}`, data)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['all-events'] })
        }
    })


    const onSubmit = async (data: FieldValues) => {
        if (data?.image) {
            const image = data?.image;
            const formData = new FormData();
            formData.append("image", image[0]);
            fetch(hosting_url, {
                method: "POST",
                body: formData
            })
                .then(res => res.json())
                .then(async (ResData) => {
                    if (ResData) {
                        const newData = {
                            event_name: data?.event_name,
                            image: ResData?.data?.display_url,
                        }
                        await mutateAsync(newData);
                        console.log(isSuccess);

                        if (isSuccess) {
                            Swal.fire({
                                title: 'Updated!',
                                text: 'Item Updated!',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                            })
                            reset();
                        } else {
                            console.log(isError);

                        }
                    }
                })
        } else {
            const newData = {
                event_name: data?.event_name,
                image: event?.image,
            }
            await mutateAsync(newData);
            console.log(isSuccess);

            if (isSuccess) {
                Swal.fire({
                    title: 'Updated!',
                    text: 'Item Updated!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                reset();
            } else {
                console.log(isError);

            }
        }
    }


    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ something: "" })
        }
    }, [formState, reset])
    return (
        <section>
            <DashHead title="Update Event Items" />

            <div className='py-10 w-full mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4 w-full'>

                    <label className='font-bold brandFont'>Event Name<sup className='text-error'>*</sup></label>
                    <input defaultValue={event?.event_name ? event?.event_name : ""} type='text' placeholder='Enter Event Name'
                        {...register("event_name")}
                        aria-invalid={errors.event_name ? "true" : "false"}
                        className='inputField' />
                    {errors.event_name?.type === 'required' && <p role="alert" className='text-error font-medium'>Event Name is required</p>}

                    {
                        isImageChange && <div>
                            <label className='font-bold brandFont'>Image<sup className='text-error'>*</sup></label>
                            <div className="upload-files-container bg-accent bg-opacity-50 p-8 rounded-lg flex items-center justify-center flex-col space-y-5  w-[350px] lg:w-full">
                                <div className="border-2 border-dashed border-accent rounded-lg p-8 w-full text-center flex flex-col items-center">
                                    <label className="text-xl w-full text-center flex flex-col items-center cursor-pointer">
                                        <UploadCloudIcon className="w-10 h-10 text-success" />
                                        <span className="text-primary brandFont">
                                            <input
                                                type="file"
                                                {...register("image")}
                                                aria-invalid={errors.image ? "true" : "false"}
                                                className="default-file-input opacity-0"
                                            />
                                            <span className="browse-files-text">browse file</span>
                                            <span> from device</span>
                                        </span>
                                    </label>
                                </div>
                            </div>
                            {errors.image?.type === 'required' && <p role="alert" className='text-error font-medium'>Image is required</p>}
                        </div>
                    }



                    {
                        !isImageChange && <div className='relative' onClick={() => setChangeIsImageChange(true)}>
                            <img src={event?.image} className="max-w-sm rounded-lg shadow-2xl" />
                            <div className="max-w-sm rounded-lg shadow-2xl absolute top-0 w-full h-full bg-black opacity-0 flex items-center justify-center text-white hover:opacity-80 transition-all duration-500">
                                <span className="bg-primary px-2 py-2 rounded-full cursor-pointer "><UploadCloud className='w-8 h-8' /></span>
                            </div>
                        </div>
                    }

                    <div>
                        <button type='submit' className='btn-second'>Update</button>
                        {/* <input type="submit" value="Submit" className='btn-second' /> */}
                    </div>
                </form>
            </div>
        </section>
    );
};

export default UpdateEvent;