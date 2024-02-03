import { Layout, Statistic } from "antd";
import { useState, useEffect } from "react";
import { Avatar, Button, List, Skeleton } from "antd";
import CountUp from "react-countup";

const { Content } = Layout;
const formatter = (value) => <CountUp end={value} separator="," />;

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

function Overview() {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);
  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        }))
      )
    );
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res.results);
        setData(newData);
        setList(newData);
        setLoading(false);
        window.dispatchEvent(new Event("resize"));
      });
  };
  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;

  return (
    <>
      <Content
        style={{
          margin: "10px",
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 360,
          }}
        >
          <div className="text-5xl pb-4">Overview</div>
          <div className="flex flex-row">
            <div className="flex-1 mr-2 p-4 rounded-lg shadow border bg-blue-200">
              <Statistic title="Total Pets" value={250} formatter={formatter} />
            </div>
            <div className="flex-1 mx-2 p-4 rounded-lg shadow border bg-blue-200">
              <Statistic
                title="Adopted Pets"
                value={200}
                formatter={formatter}
              />
            </div>
            <div className="flex-1 ml-2 p-4 rounded-lg shadow border bg-blue-200">
              <Statistic
                title="Unadopted Pets"
                value={50}
                formatter={formatter}
              />
            </div>
          </div>
          <div className="flex mt-4">
            <div className="flex-1 mr-2 p-4 rounded-lg shadow border bg-blue-200">
              <Statistic
                title="Total Users"
                value={200}
                formatter={formatter}
              />
            </div>
            <div className="flex-1 mx-2 p-4 rounded-lg shadow border bg-blue-200">
              <Statistic title="Adopters" value={164} formatter={formatter} />
            </div>
          </div>
          <div className="flex flex-row mt-8">
            <div className="flex-1 mr-2">
              <span className="text-2xl font-medium">New Pets</span>
              <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={list}
                renderItem={(item) => (
                  <List.Item
                    actions={[
                      <a key="list-loadmore-edit">edit</a>,
                      <a key="list-loadmore-more">mark as adopted</a>,
                      <a key="list-loadmore-more">delete</a>,
                    ]}
                  >
                    <Skeleton
                      avatar
                      title={false}
                      loading={item.loading}
                      active
                    >
                      <List.Item.Meta
                        avatar={<Avatar src={item.picture.large} />}
                        title={
                          <a href="https://ant.design">{item.name?.last}</a>
                        }
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                      />
                    </Skeleton>
                  </List.Item>
                )}
              />
            </div>
            <div className="flex-1 ">
              <span className="text-2xl font-medium">New Users</span>
              <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={list}
                renderItem={(item) => (
                  <List.Item
                    actions={[
                      <a key="list-loadmore-edit">edit</a>,
                      <a key="list-loadmore-more">delete</a>,

                    ]}
                  >
                    <Skeleton
                      avatar
                      title={false}
                      loading={item.loading}
                      active
                    >
                      <List.Item.Meta
                        avatar={<Avatar src={item.picture.large} />}
                        title={
                          <a href="https://ant.design">{item.name?.last}</a>
                        }
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                      />
                    </Skeleton>
                  </List.Item>
                )}
              />
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}

export default Overview;
