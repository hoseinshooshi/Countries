import { useForm } from "react-hook-form"
import HText from "../../shared/HText"


const ContactUs = () => {
    const {register, trigger, formState:{errors}} = useForm();
    const onsubmit = async(e:any) =>{
        const isValid = await trigger(); 
        if(!isValid) {
        e.preventDefault();
        }

    }
  return (
    <section
    id="contactus"
    className="mx-auto w-5/6 pt-15 pb-12"
    >
        <div>
            {/* Header */}
            <div
            className="md:w-3/5">
                <HText>
                    <span className="text-[#21496c]">CONTACT ME</span>
                </HText>
            </div>
            {/* form */}
            <div className="mt-6 justify-between gap-4 md:flex">
                <div className="mt-6 basis-3/5 md:mt-0 ">
                    <form target="_blank"
                    onSubmit={onsubmit}
                    method="POST"
                    action="https://formsubmit.co/el/tozive" >
                        <input type="text" 
                        className="w-full mt-5 text-amber-100 rounded-lg bg-[#21496c] px-4 py-2 placeholder-amber-50 outline-0 focus:outline-1 focus:outline-[#21496c] transition duration-300 focus:outline-offset-2"
                        placeholder="NAME"
                        {...register("name", {
                            required: true, 
                            maxLength: 100
                        })}/>
                        {errors.name && (
                            <p className="mt-1 text-red-200">
                                {errors.name.type === "required" && "the name field is required"}
                                {errors.name.type === "maxLength" && "you have exeeded the max length"}
                            </p>
                        )}
                        <input type="email"
                        className="w-full rounded-lg mt-5 px-4 py-2 text-amber-100 bg-[#21496c] placeholder-amber-50 outline-0 focus:outline-1 focus:outline-[#21496c] transition duration-300 focus:outline-offset-2"
                        placeholder="EMAIL"
                        {...register("email", {
                            required: true, 
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}/>
                        {errors.email && (
                            <p className="mt-1 text-red-200">
                                {errors.email.type === "required" && "the name field is required"}
                                {errors.email.type === "pattern" && "you have wrong email pattern"}
                            </p>
                        )}
                        <textarea
                        className="w-full rounded-lg mt-5 px-4 py-2 text-amber-100 bg-[#21496c] placeholder-amber-50 outline-0 focus:outline-1 focus:outline-[#21496c] transition duration-300 focus:outline-offset-2"
                        rows={4}
                        cols={50}
                        placeholder="MESSAGE"
                        {...register("message", {
                            required: true, 
                            maxLength: 1000
                        })}/>
                        {errors.message && (
                            <p className="mt-1 text-red-200">
                                {errors.message.type === "required" && "the name field is required"}
                                {errors.message.type === "maxLength" && "you have exeeded the 2000 max length"}
                            </p>
                        )}
                        <button
                        type="submit"
                        className="hover:bg-[#3b6c21] cursor-pointer mt-4 rounded-lg text-[#3b6c21] px-10 py-4 transition duration-500 border-2 border-[#3b6c21] hover:text-gray-200 w-full">
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactUs