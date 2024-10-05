import {
  Bar,
  BarChart,
  Label,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
  AreaChart,
  Area,
  Tooltip,
} from "recharts";
import { styles } from "../../styles/style";
import Loader from "../Loader/Loader";
import {
  useGetOrdersAnalyticsQuery,
  useGetUsersAnalyticsQuery,
} from "../../redux/features/analytics/analyticsApi";

type Props = {
  isCollapsed: boolean;
};

const OrderAnalytics = ({ isCollapsed }: Props) => {
  const { data, isLoading } = useGetOrdersAnalyticsQuery({});
  const { data: userData, isLoading: loadingff } = useGetUsersAnalyticsQuery(
    {}
  );

  console.log("isCollapsed", isCollapsed);

  console.log("data order", data);

  const analyticsDataFirst: any = [];
  const analyticsDataSecond: any = [];

  data &&
    data.message.last12Months.forEach((item: any) => {
      analyticsDataFirst.push({ name: item.month, uv: item.count });
    });
  data &&
    data.message.last12Months.forEach((item: any) => {
      analyticsDataSecond.push({ name: item.month, count: item.count });
    });

  const minValue = 0;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="h-screen ">
          <div className="mt-[50px]">
            <h1 className={`${styles.title} px-5 !text-start font-bold`}>
              Order Analytics
            </h1>
            <p className={`${styles.label} px-5 `}>
              {" "}
              Last 12 months analytics data{" "}
            </p>
          </div>

          <div className="flex h-[90%] mt-[50px] gap-y-5 flex-col md:flex-row justify-start items-center md:items-start">
            <div className=" p-8 w-1/2 h-1/2   ">
              <div className="w-full  h-full flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart width={150} height={300} data={analyticsDataFirst}>
                    <XAxis dataKey="name">
                      <Label offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis domain={[minValue, "auto"]} />
                    <Bar dataKey="uv" fill="#3faf82">
                      <LabelList dataKey="uv" position="top" />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="p-8 w-1/2 h-1/2  ">
              <div className="w-full  h-full flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={analyticsDataSecond}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="count"
                      stroke="#4d62d9"
                      fill="#4d62d9"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>{" "}
          </div>
        </div>
      )}
    </>
  );
};

export default OrderAnalytics;
