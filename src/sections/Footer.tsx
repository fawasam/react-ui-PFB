const Footer = () => {
  return (
    <footer className="h-[400px] mt-24">
      <div className="mt-12">
        <div className="flex flex-col items-center text-center">
          <h2
            className="text-[2rem]  font-[500]"
            style={{
              background: "-webkit-linear-gradient(#fff, #333)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            The transition CDN-dCDN
          </h2>
          <p className="text-[1rem] md:w-[800px] font-[400] mt-8 w-fit leading-snug text-[#D2D2D2]">
            FanCloud pioneers a new era of connectivity with its decentralised
            content delivery network (dCDN), leveraging a global network of
            community-powered nodes. By harnessing a decentralised architecture,
            dCDN drastically reduces data transfer and compute costs while
            enhancing load time. Join FanCloud’s dCDN network and experience the
            future of seamless, secure and community- driven consumption
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
