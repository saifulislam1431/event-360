import { useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { PlusCircle, UploadCloudIcon } from 'lucide-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import axios from 'axios';
import DashHead from '../../../components/DashHead';

const token = import.meta.env.VITE_IMAGE_TOKEN;

interface TFormDataType {
    event_name: string,
    image: string,
}

const AddNewEvent = () => {
    const hosting_url = `https://api.imgbb.com/1/upload?key=${token}`
    const { register, formState: { errors }, handleSubmit, reset, formState } = useForm();


    const queryClient = useQueryClient();

    const { mutateAsync } = useMutation({
        mutationFn: async (data: TFormDataType) => {
            return await axios.post("https://event360-backend.vercel.app/api/v1/add-events", data)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['all-events'] });
            Swal.fire({
                title: 'Success!',
                text: 'Event added!',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            reset();
        }
    })


    const onSubmit = async (data: FieldValues) => {
        const image = data?.image;
        const formData = new FormData();
        formData.append("image", image[0]);
        console.log(data);

        fetch(hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(async (ResData) => {
                if (ResData) {
                    const newData = {
                        event_name: data?.event_name,
                        image: ResData?.data.display_url,
                    }
                    await mutateAsync(newData);
                }
            })
    }


    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ something: "" })
        }
    }, [formState, reset])
    return (
        <section>
            <DashHead title="Add New Event" />

            <div className='py-10 w-full lg:w-1/2 mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4 w-full'>

                    <label className='font-bold brandFont'>Event Name<sup className='text-error'>*</sup></label>
                    <input type='text' placeholder='Enter Your Name'
                        {...register("event_name", { required: true })}
                        aria-invalid={errors.event_name ? "true" : "false"}
                        className='inputField' />
                    {errors.event_name?.type === 'required' && <p role="alert" className='text-error font-medium'>Event Name is required</p>}


                    <label className='font-bold brandFont'>Image<sup className='text-error'>*</sup></label>
                    <div className="upload-files-container bg-accent bg-opacity-50 p-8 rounded-lg flex items-center justify-center flex-col space-y-5  w-[350px] lg:w-full">
                        <div className="border-2 border-dashed border-accent rounded-lg p-8 w-full text-center flex flex-col items-center">
                            <label className="text-xl w-full text-center flex flex-col items-center cursor-pointer">
                                <UploadCloudIcon className="w-10 h-10 text-success" />
                                <span className="text-primary brandFont">
                                    <input
                                        type="file"
                                        {...register("image", { required: true })}
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

                    <div>
                        <button type='submit' className='btn-second'><PlusCircle /> Add</button>
                        {/* <input type="submit" value="Submit" className='btn-second' /> */}
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddNewEvent;