import React from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Avatar, Layout, List, Space, Select } from "antd";

const data = Array.from({
  length: 23,
}).map((_, i) => ({
  href: "https://ant.design",
  title: `ant design part ${i}`,
  avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
  description:
    "Ant Design, a design language for background applications, is refined by Ant UED Team.",
  content:
    "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
}));

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const { Content } = Layout;

function AllAdoptedPets() {
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
          <div className="text-5xl pb-4">All Adopted Pets</div>
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 5,
            }}
            dataSource={data}
            renderItem={(item) => (
              <List.Item
                key={item.title}
                actions={[
                  <IconText icon={EditOutlined} key="list-vertical-edit-o" />,
                  <IconText icon={DeleteOutlined} key="list-vertical-delete" />,
                  <Select
                    defaultValue="Adopted"
                    style={{
                      width: 120,
                    }}
                    disabled
                    options={[
                      {
                        value: "adopted",
                        label: "Adopted",
                      },
                    ]}
                  />,
                ]}
                extra={
                  <img
                    width={272}
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  />
                }
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />

                {item.content}
              </List.Item>
            )}
          />
        </div>
      </Content>
    </>
  );
}

export default AllAdoptedPets;
