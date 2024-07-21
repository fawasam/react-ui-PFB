import CardUI from "./CardUI";

const Cards = () => {
  return (
    <div className="grid grid-cols-3 my-14 gap-10">
      <CardUI
        title="Content Nodes"
        description="Content Nodes, Earn rewards for supplying their GPU, Storage and bandwidth for dCDN"
        bgColor="bg-blue-light"
        textColor="white"
        buttonTitle="Deploy"
        btnBgColor="bg-purple-light"
        btnBorderColor="border-purple-border"
        isBtn1
      />
      <CardUI
        title="Orchestrators"
        description="Orchestrators will be responsible for connecting the client with the content node for seamless streaming. Traffic distribution will be based on multiple factors like job type, performance"
        bgColor="bg-purple-light"
        buttonTitle="Coming soon"
        btnBgColor="bg-purple-dark"
        btnBorderColor="border-purple-border"
      />
      <CardUI
        title="Validators"
        description="Validators will be responsible for validating the execution of dCDN Network. Validators will earn rewards from Staking and earn a cut on the executions validated."
        bgColor="bg-green-light"
        buttonTitle="Coming soon"
        btnBgColor="bg-green-dark"
        btnBorderColor="border-green-border"
      />
    </div>
  );
};

export default Cards;
