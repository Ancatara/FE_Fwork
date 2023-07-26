import CheckboxField from 'components/common/CheckboxField';
import InputField from 'components/common/InputField';
import RadioField from 'components/common/RadioField';
import Loading from 'components/pageComponent/loading/Loading';
import { FastField, Form, Formik } from 'formik';
import { RegisterFormType } from 'interfaces/formType';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { axiosRequest } from 'utils/axiosRequest';
import { RegisterSchema } from 'validation';
export interface RegisterProps {}

export default function RegisterPage(props: RegisterProps) {
  const navigate = useNavigate();
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const initialValues: RegisterFormType = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: false,
    role: '',
  };
  const handleSubmit = async (values: RegisterFormType) => {
    const userData = {
      firstName: values.firstName,
      lastName: values.lastName,
      phone: values.phone,
      email: values.email,
      password: values.password,
      role: values.role,
    };
    setIsLoading(true);
    axiosRequest({
      url: '/auth/register',
      method: 'post',
      data: userData,
    })
      .then((response) => {
        setTimeout(() => {
          setIsLoading(false);
          navigate('/login');
        }, 500);
      })
      .catch((error) => {
        setError(error.response.data.message);
        toast.error(error.response.data.message);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <header className="fixed top-0 left-0 w-full">
        <div className="container px-4 py-6 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            Fwork
          </Link>
        </div>
      </header>
      <div className="mx-auto my-10 pb-16 rounded-lg border-2 border-green-600 p-1 w-7/12">
        <div className="">
          <h4 className="flex content-center justify-center my-8 text-4xl text-green-700">
            Sign up
          </h4>
        </div>

        <button
          aria-label="Login with Google"
          type="button"
          className="rounded-full flex content-center justify-center w-2/3 p-2 my-6 mx-auto space-x-4 border  dark:border-gray-400 bg-green-50 hover:bg-green-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
          <p>Login with Google</p>
        </button>

        <div className="flex items-center justify-center w-2/3 my-4 mx-auto">
          <hr className="w-1/2" />
          <p className="px-3">OR</p>
          <hr className="w-1/2" />
        </div>
        {isLoading && <Loading />}

        <Formik
          enableReinitialize
          initialValues={initialValues}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
          validateOnChange={false}
          validationSchema={RegisterSchema}
        >
          {({ values, touched, errors }) => {
            return (
              <Form>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                  <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                      <div>
                        <FastField
                          component={InputField}
                          name="firstName"
                          title="First name"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <FastField
                          component={InputField}
                          name="lastName"
                          title="Last name"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <FastField
                        component={InputField}
                        name="phone"
                        title="Phone number"
                        placeholder="0987654321"
                      />
                    </div>
                    <div className="mb-6">
                      <FastField
                        component={InputField}
                        name="email"
                        title="Địa chỉ Email"
                        placeholder="fwork@gmail.com"
                      />
                    </div>
                    <div className="mb-6">
                      <FastField
                        component={InputField}
                        name="password"
                        title="Mật khẩu"
                        placeholder="******"
                        type="password"
                      />
                    </div>
                    <div className="mb-6">
                      <FastField
                        component={InputField}
                        name="confirmPassword"
                        title="Nhập lại mật khẩu"
                        placeholder="******"
                        type="password"
                      />
                    </div>

                    <div className="mt-8 flex items-center">
                      <FastField
                        component={CheckboxField}
                        name="agree"
                        label="Vâng, Tôi hiểu và đồng ý với dịch vụ của Fwork"
                        checked={values.agree}
                      />
                      {/* {error && (
                        <p className="text-red-600 mt-1 text-sm">{error}</p>
                      )} */}
                    </div>
                  </div>
                </div>
                <div className="flex text-center items-center justify-center mt-5">
                  <div className="mr-5">
                    <FastField
                      component={RadioField}
                      name="role"
                      label="Tôi là người lao động"
                      checked={values.role === 'worker'}
                      value="worker"
                    />
                  </div>
                  <div>
                    <FastField
                      component={RadioField}
                      name="role"
                      label="Tôi là khách hàng"
                      checked={values.role === 'customer'}
                      value="customer"
                    />
                  </div>
                </div>

                {error && (
                  <p className="ml-4 text-sm text-red-600 mt-1 text-center">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  className="rounded-full flex content-center justify-center w-2/3 p-2 mt-10 mb-6 mx-auto space-x-4 border  dark:border-gray-400 bg-green-300 hover:bg-green-600 hover:text-white"
                >
                  <p>Create my account</p>
                </button>
              </Form>
            );
          }}
        </Formik>
        <p className="text-center flex justify-center items-center mx-auto mt-10">
          Already have an account?{' '}
          <Link to="/login" className="text-green-500 hover:text-green-700">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
