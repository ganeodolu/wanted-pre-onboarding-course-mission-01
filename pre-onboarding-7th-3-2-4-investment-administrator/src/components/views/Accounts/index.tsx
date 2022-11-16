import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import ContentLayout from "src/components/common/ContentLayout";
import Footer from "src/components/common/Footer";
import Header from "src/components/common/Header";
import Sider from "src/components/common/Sider";
import { getAccounts } from "../Login/api";

export default function Accounts() {
  const [state, setState] = useState({
    page: 1,
    limit: 20,
    brokerId: null,
    isActive: null,
    status: null
  });
  const { page, limit, brokerId, isActive, status } = state;

  const { data } = useQuery(
    ["accounts", page, brokerId, isActive, status],
    () => getAccounts({ page, limit, brokerId, isActive, status })
  );
  console.log(data);

  return (
    <div className="flex w-full">
      <Sider />
      <div className="flex flex-1 items-stretch flex-wrap bg-myGray">
        <Header title="투자계좌" />
        <ContentLayout>
          <table className="bg-white font-normal">
            <thead className="bg-myBeige">
              <tr>
                <th>증권사</th>
                <th>계좌번호</th>
                <th>고객명</th>
                <th>운용상태</th>
                <th>계약원금</th>
                <th>예수금</th>
                <th>총자산</th>
                <th>평가손익</th>
                <th>수익률</th>
                <th>상품명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>100</td>
                <td>200</td>
                <td>300</td>
                <td>400</td>
                <td>500</td>
                <td>60000000000</td>
                <td>700</td>
                <td>800</td>
                <td>900</td>
                <td>1000</td>
              </tr>
            </tbody>
          </table>
        </ContentLayout>
        <Footer />
      </div>
      <style jsx>
        {`
          table {
            border-collapse: collapse;
            border: 1px solid #f0f0f0;
            width: 95%;
            margin: 2rem auto;
          }
          th{
              border-collapse: collapse;
              border: 1px solid #f0f0f0;
              text-align: center;
              height: 2.5rem;
              color: #222;
            }
          tr,
          td {
              border-collapse: collapse;
              border: 1px solid #f0f0f0;
              text-align: right;
              height: 2.5rem;
              padding-right: 1rem;
            }
          }
        `}
      </style>
    </div>
  );
}
