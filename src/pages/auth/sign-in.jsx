import React from 'react';
import OptimizedImage from '../../components/image-store/image-store';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { LoginSchema } from '../../schemas/auth';

const SignIn = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            marketingAccept: false
        },
        validationSchema: LoginSchema,
        onSubmit: async (values) => {
            try {
                console.log(values);
            } catch (error) {
                if (error instanceof Error) {
                    console.log(error.message);
                } else {
                    console.log("Unknown Error");
                }
            }
        }
    });

    return (
        <section className="">
            <div className="lg:grid lg:min-h-[90vh] lg:grid-cols-12">
                <main className="flex items-start justify-start px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                    <div className="max-w-xl lg:max-w-3xl">
                        <a className="block text-blue-600" href="#">
                            <span className="sr-only">Home</span>
                            {/* Add your logo or SVG here */}
                        </a>

                        <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                            Login To DineStocks
                        </h1>

                        <p className="mt-4 leading-relaxed text-gray-500">
                            Login to DineStocks to effortlessly manage your restaurant's inventory, orders, and supplier connections all in one place.
                        </p>

                        <form onSubmit={formik.handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
                            <div className="col-span-6">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700"> Email </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    className={`mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm py-2 border ${
                                        formik.touched.email && formik.errors.email ? 'border-red-500' : ''
                                    }`}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                                ) : null}
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700"> Password </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                    className={`mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm py-2 border ${
                                        formik.touched.password && formik.errors.password ? 'border-red-500' : ''
                                    }`}
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
                                ) : null}
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="marketingAccept" className="flex gap-4">
                                    <input
                                        type="checkbox"
                                        id="marketingAccept"
                                        name="marketingAccept"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        checked={formik.values.marketingAccept}
                                        className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                                    />
                                    <span className="text-sm text-gray-700">
                                        I want to receive emails about events, product updates and company announcements.
                                    </span>
                                </label>
                            </div>

                            <div className="col-span-6">
                                <p className="text-sm text-gray-500">
                                    By creating an account, you agree to our
                                    <a href="#" className="text-gray-700 underline"> terms and conditions </a>
                                    and
                                    <a href="#" className="text-gray-700 underline"> privacy policy </a>.
                                </p>
                            </div>

                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    type="submit"
                                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                >
                                    Login
                                </button>

                                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    Don't have an account?
                                    <Link to="/sign-up" className="text-gray-700 underline">Sign up</Link>.
                                </p>
                            </div>
                        </form>
                    </div>
                </main>

                <aside className="relative block lg:order-last lg:col-span-5 lg:h-[90vh] xl:col-span-6">
                    <div className='relative h-full'>
                        <OptimizedImage path={"sign-up"} className="object-cover w-full h-full" />
                    </div>
                </aside>
            </div>
        </section>
    )
}

export default SignIn;
