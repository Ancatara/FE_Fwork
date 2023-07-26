import React from "react";
import { TiTickOutline } from "react-icons/ti";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./lading.css";
import FormContact from "pages/contact/formContact";

const LandingPage: React.FC = () => {
  return (
    <div className=" mt-20">
      <main className="container mx-auto py-16">
        <section className="session-landing ">
          <Carousel
            className="text-center 	"
            interval={3000}
            autoPlay
            infiniteLoop

          >
            <div className="  ">
              <img
                className="rounded-2xl w-full h-96 object-cover"
                src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2020/11/11061946/part-time-hours-1024x512.png"
              />
              {/* <p className="legend">Legend 1</p> */}
            </div>
            <div className="">
              <img
                className="rounded-2xl w-full h-96 object-cover"
                src="https://arrestyourdebt.com/wp-content/uploads/2021/11/disciplined-action-scaled.jpg"
              />
              {/* <p className="legend">Legend 2</p> */}
            </div>
            <div className="">
              <img
                className="rounded-2xl w-full h-96 object-cover"
                src="https://ahaslides.com/wp-content/uploads/2023/01/SEO2167-thumb-1024x538.png"
              />
              {/* <p className="legend">Legend 3</p> */}
            </div>
          </Carousel>
        </section>
        <section className="bg-blue-100 m-10 p-16 rounded-2xl ">
          <div className="flex justify-between items-center">
            <div className="container w-1/2 mr-8">
              <div className="flex flex-col items-center justify-center text-center">
                <h1 className="text-3xl font-bold mb-6 text-yellow-500 ">
                  Công việc nhà trở nên thật đơn giản:
                  <br />{" "}
                  <span className="text-blue-700 text-4xl">
                    Fwork kết nối khách hàng với những cộng tác viên đáng tin
                    cậy
                  </span>
                </h1>
                <p className="text-black text-lg mb-10">
                  Fwork là một nền tảng kết nối chủ nhà với các cộng tác viên có
                  kỹ năng để hỗ trợ trong các công việc nhà cửa khác nhau. Tìm
                  công nhân phù hợp với nhu cầu của bạn hoặc nộp đơn cho các
                  công việc có sẵn chỉ trong vài bước đơn giản.
                </p>
                <Link
                  to="/login"
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors"
                >
                  Bắt đầu
                </Link>
              </div>
            </div>
            <img
              src="https://giaiphapvieclam.com/wp-content/uploads/2021/06/1620723399_ky-nang-lam-viec-nhom.jpg"
              className="w-1/2 rounded-xl"
            />
          </div>
        </section>
        <section className="bg-white py-20 m-10 rounded-2xl ">
          <div className="container mx-auto">
            <h2 className="text-3xl text-blue-600 font-bold text-center mb-10">
              Tiện ích
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="px-6 py-10 bg-blue-100 rounded-xl">
                <Link to="/register" className="text-xl font-semibold mb-4">
                  Tìm kiếm công việc
                </Link>
                <p className="text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  quis convallis mauris.
                </p>
              </div>
              <div className="px-6 py-10 bg-blue-100 rounded-xl">
                <Link to="/register" className="text-xl font-semibold mb-4">
                  Kết nối với cộng tác viên
                </Link>
                <p className="text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  quis convallis mauris.
                </p>
              </div>
              <div className="px-6 py-10 bg-blue-100 rounded-xl">
                <Link to="/register" className="text-xl font-semibold mb-4">
                  Các mục khác...
                </Link>
                <p className="text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  quis convallis mauris.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="what-is-fwork"
          className="mb-16 bg-blue-100 m-10 p-16 rounded-2xl "
        >
          <div className="flex justify-between items-center">
            <div className="w-1/2 p-8 ">
              <h2 className="text-4xl text-blue-600 font-bold mb-6">
                Quy trình sử dụng dịch vụ
              </h2>
              <ul className="text-black text-xl mb-10 flex-auto">
                <li className="p-4 font-semibold"> Đăng kí tài khoản</li>
                <li className="p-4 font-semibold"> Lựa chọn dịch vụ</li>
                <li className="p-4 font-semibold"> Tiến hành công việc</li>
                <li className="p-4 font-semibold"> Đánh giá và nhận xét</li>
              </ul>
            </div>
            <img
              src="https://pyjamahr.com/wp-content/uploads/2021/12/Employee_Development_Plans_4_Winning_Steps_to_Engage_Employees700x525.png"
              className="w-1/2 rounded-xl"
            />
          </div>
        </section>

        <section
          id="apply-job"
          className="mb-16 bg-blue-100 m-10 p-16 rounded-2xl "
        >
          <div className="flex justify-between items-center">
            <img
              src="https://i.pinimg.com/564x/31/40/32/3140327be60f820f911b9c3d6d9e0bd5.jpg"
              alt="Apply a Job"
              className="w-1/2 rounded-xl"
            />
            <div className="w-1/2 m-6 p-8">
              <h2 className="text-4xl text-blue-600 font-bold mb-4">
                Tìm kiếm công việc
              </h2>
              <p className="text-black text-lg">
                Bạn đang tìm kiếm việc làm theo giờ? Fwork giúp bạn dễ dàng tìm
                hiểu và nộp đơn cho các công việc có sẵn trong khu vực của bạn.
                Hãy tạo tài khoản, khám phá danh sách công việc và gửi đơn xin
                việc chỉ với vài thao tác đơn giản.
              </p>
            </div>
          </div>
        </section>

        <section
          id="find-worker"
          className="mb-16 bg-blue-100 m-10 p-16 rounded-2xl "
        >
          <div className="flex justify-between items-center">
            <div className="w-1/2 p-10">
              <h2 className="text-4xl text-blue-600 font-bold mb-4">
                Lựa chọn dịch vụ phù hợp
              </h2>
              <p className="text-black text-lg">
                Cần giúp đỡ các công việc nhà, sửa chữa đồ gia dụng hay cần tìm
                người phục vụ bàn trong các bữa tiệc,...? Fwork kết nối bạn với
                những cộng tác viên có kỹ năng sẵn sàng hỗ trợ bạn. Chỉ cần đăng
                thông tin yêu cầu công việc của bạn, xem xét hồ sơ của các cộng
                tác viên và thuê ứng viên tốt nhất cho công việc đó.
              </p>
            </div>
            <img
              src="https://i.pinimg.com/564x/b5/13/f2/b513f2c94d3111140a9143770dd923df.jpg"
              alt="Find a Worker"
              className="w-1/2 rounded-xl"
            />
          </div>
        </section>
        <section className=" ">
          <div className=" bg-blue-100 m-10 p-16 rounded-2xl ">
            <h2 className="text-4xl font-bold text-blue-600 mb-2">
              Chúng tôi luôn sẵn sàng hỗ trợ bạn
            </h2>
            <p className="text-black">
              Khi có bất kỳ thắc mắc gì về dịch vụ, bạn có thể gửi phản hồi hoặc
              liên hệ thông tin dưới đây, chúng tôi rất vui lòng giải đáp cho
              bạn.
            </p>
          </div>
          <FormContact/>
        </section>
      </main>
      <button
        className="fixed bottom-8 right-8 bg-blue-700 text-white rounded-full p-2 shadow-lg hover:bg-blue-500"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaArrowAltCircleUp size={30} />
      </button>
    </div>
  );
};

export default LandingPage;
