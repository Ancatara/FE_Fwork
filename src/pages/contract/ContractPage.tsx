import { Avatar, Card, CardHeader, Chip, TableBody, Tooltip, Typography } from "@mui/material";
import Header from "components/layout/header";
import { Button } from "components/pageComponent/Button/Button";
import { useEffect, useState } from "react";
import {HiOutlineChatBubbleLeftEllipsis} from 'react-icons/hi2'
 
interface Contract {
  img: string;
  name: string;
  email: string;
  online: boolean;
  job: string
  date: string
  phone: string
}
 
const TABLE_HEAD = ["Tên ứng viên", "Nghề nghiệp", "Trạng thái", "Ngày làm việc", "Liên hệ", "Gọi điện"];
 

 
  const ContractPage: React.FC = () => {

    const [contracts, setContracts] = useState<Contract[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('');
    const [filteredContracts, setFilteredContracts] = useState<Contract[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [contractsPerPage] = useState(5);


  useEffect(()=>{
    const sampleContracts: Contract[] = [
      {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
        name: "John Michael",
        email: "john@creative-tim.com",
        job: "Thợ Sơn",
        online: true,
        date: "23/04/18",
        phone: "0865345215"
      },
      {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
        name: "Alexa Liras",
        email: "alexa@creative-tim.com",
        job: "Programator",
        online: false,
        date: "23/04/18",
        phone: "0865345215"
      },
      {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
        name: "Laurent Perrier",
        email: "laurent@creative-tim.com",
        job: "Cắt tóc",
        online: false,
        date: "19/09/17",
        phone: "0865345215"
      },
      {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
        name: "Michael Levi",
        email: "michael@creative-tim.com",
        job: "Tỉa cây cảnh",
        online: true,
        date: "24/12/08",
        phone: "0865345215"
      },
      {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        name: "Richard Gran",
        email: "richard@creative-tim.com",
        job: "Dọn vệ sinh",
        online: false,
        date: "04/10/21",
        phone: "0865345215"
      },
      {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        name: "Richard Gran",
        email: "richard@creative-tim.com",
        job: "Dọn vệ sinh",
        online: false,
        date: "04/10/21",
        phone: "0865345215"
      },
      {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        name: "Richard Gran",
        email: "richard@creative-tim.com",
        job: "Dọn vệ sinh",
        online: false,
        date: "04/10/21",
        phone: "0865345215"
      },
    ];
    setContracts(sampleContracts);
    setFilteredContracts(sampleContracts);
  }, [])

    // Handle search input change
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const searchTerm = e.target.value;
      setSearchTerm(searchTerm);
      filterContracts(searchTerm, sortOption);
    };
  
    // Handle sort option change
    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const sortOption = e.target.value;
      setSortOption(sortOption);
      // filterContracts(searchTerm, sortOption);
    };
  
    // Filter contracts based on search term and sort option
    const filterContracts = (searchTerm: string, sortOption: string) => {
      let filtered = [...contracts];
  
      if (searchTerm) {
        filtered = filtered.filter((contract) =>
          contract.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
  
      // if (sortOption === 'startDate') {
      //   filtered.sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
      // } else if (sortOption === 'totalPayment') {
      //   filtered.sort((a, b) => a.totalPayment - b.totalPayment);
      // }
  
      setFilteredContracts(filtered);
    };
  
    // Calculate total contract count
    const totalContractCount = filteredContracts.length;
  
    const indexOfLastContract = currentPage * contractsPerPage;
    const indexOfFirstContract = indexOfLastContract - contractsPerPage;
    const currentContracts = filteredContracts.slice(
      indexOfFirstContract,
      indexOfLastContract
    );
  
    // Calculate total pages
    const totalPages = Math.ceil(contracts.length / contractsPerPage);
  
    // Handle page change
    const handlePageChange = (pageNumber: number) => {
      setCurrentPage(pageNumber);
    };

  return (
  <div>
    <Header/>
    <Card className="h-full w-full bg-blue-400-400 mt-24 p-10">
      <Card className="flex justify-center items-center flex-col p-4 rounded-none border-hidden">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h6" color="blue-gray" className="uppercase">
              Danh sách hợp đồng
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Xem thông tin về tất cả nhân viên bạn đã thuê
            </Typography>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="">
          <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Tìm kiếm ..."
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full"
            />
          </div>
          <div className="">
            <Button variant='outline'>Xem tất cả</Button>
          </div>
        </div>
      </Card>
      <TableBody sx={{display: 'flex'}} className="px-4 overflow-y-auto overflow-x-visible">
        <table className="mt-4 w-full min-w-max table-auto text-left m-auto relative ml-16">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-6  justify-around">
                  <Typography
                    variant="subtitle1"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="">
            {currentContracts.map(({ img, name, email, job, online, date, phone }, index) => {
              const isLast = index === indexOfLastContract - 1;
              const classes = isLast ? "p-6" : "p-6 border-b border-blue-gray-50";
 
              return (
                <tr key={name}>
                  <td className={classes}>
                    <div className="flex items-center justify-around gap-4">
                      <Avatar src={img} alt={name} sx={{ width: 56, height: 56 }} />
                      <div className="flex flex-col">
                        <Typography variant="subtitle1" color="blue-gray" className="font-normal">
                          {name}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {email}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography variant="subtitle1" color="blue-gray" className="font-normal">
                        {job}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <Chip
                        variant="outlined"
                        label={online ? "Rảnh" : "Bận"}
                        color="success"
                      />
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography variant="subtitle1" color="blue-gray" className="font-normal">
                      {date}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Tooltip title="Liên hệ">
                        <HiOutlineChatBubbleLeftEllipsis className='h-8 w-8' type="button"/>
                    </Tooltip>
                  </td>
                  <td className={classes}>
                    <Tooltip title="Gọi điện">
                        <Button variant='destructive'>Gọi {phone}</Button>
                    </Tooltip>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableBody>
      <div className="flex justify-center my-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-2 py-1 mx-1 rounded ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        </div>
      {/* <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        
        <div className="flex gap-2">
          <Button variant="outlined" color="blue-gray" size="sm">
            Previous
          </Button>
          <Button variant="outlined" color="blue-gray" size="sm" >
            Next
          </Button>
        </div>
      </CardFooter> */}
    </Card>
  </div>

  );
}
export default ContractPage