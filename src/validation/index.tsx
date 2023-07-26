import * as Yup from 'yup';
export const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().required('Vui lòng nhập Họ của bạn!'),
  lastName: Yup.string().required('Vui lòng nhập Tên của bạn!'),
  phone: Yup.string()
    .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, 'Số điện thoại không hợp lệ')
    .required('Vui lòng nhập Số điện thoại của bạn!'),
  email: Yup.string().email("Vui lòng nhập đúng định dạng email!").required('Vui lòng nhập email của bạns!'),
  password: Yup.string()
    .min(6, 'Mật khẩu phải nhiều hơn 6 ký tự')
    .required('Không thể để trống mật khẩu'),
  confirmPassword: Yup.string()
  .oneOf([Yup.ref('password')], 'Mật khẩu không trùng khớp').required('Vui lòng xác nhận lại mật khẩu của bạn'),
  agree: Yup.bool().oneOf([true], 'Vui lòng đồng ý với điều khoản của Fwork'),
  role: Yup.mixed().oneOf(['worker', "customer"]).required("Vui lòng lựa chọn quyền của bạn!"),
});
export const CreatePostSchema = Yup.object().shape({
  title: Yup.string().required('Vui lòng nhập Tiêu đề bài viết!'),
  content: Yup.string().required('Vui lòng nhập nội dung bài viết!'),
  address: Yup.string().required('Vui lòng nhập địa chỉ!'),
  salary: Yup.number().required('Vui lòng nhập số tiền lương/ngày!'),
  startDate: Yup.string().required('Vui lòng chọn ngày bắt đầu làm việc!'),
  duration: Yup.string().required('Vui lòng chọn khoản thời gian làm việc!'),
  CategoryId: Yup.string().required('Vui lòng chọn ngành, nghề của công việc!'),
});
