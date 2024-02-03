import { useState, useEffect } from "react";
import { Layout, Statistic } from "antd";
import { Avatar, Button, List, Skeleton } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

const { Content } = Layout;

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

function WeeklyOverview() {
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
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
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
            //background: colorBgContainer,
          }}
        >
          <div class="text-5xl pb-4">Weekly Overview</div>
          <div className="flex">
            <div class="flex-1 mr-2 p-4 rounded-lg shadow border">
              <Statistic
                title="New Pets"
                value={24}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
              />
            </div>
            <div class="flex-1 mx-2 p-4 rounded-lg shadow border">
              <Statistic
                title="Adopted Pets"
                value={20}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
              />
            </div>

            <div class="flex-1 ml-2 p-4 rounded-lg shadow border">
              <Statistic
                title="Unadopted Pets"
                value={4}
                valueStyle={{ color: "#cf1322" }}
                prefix={<ArrowDownOutlined />}
              />
            </div>
          </div>
          <div className="flex mt-4">
            <div class="flex-1 mr-2 p-4 rounded-lg shadow border">
              <Statistic
                title="New Users"
                value={80}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
              />
            </div>
            <div class="flex-1 mx-2 p-4 rounded-lg shadow border">
              <Statistic
                title="Adopters"
                value={60}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
              />
            </div>
          </div>
          <div className="flex flex-row mt-8">
            <div className="flex-1 mr-2">
              <span className="text-2xl font-medium">Top Pets This Week</span>
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
              <span className="text-2xl font-medium">Top Users This Month</span>
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

export default WeeklyOverview;
