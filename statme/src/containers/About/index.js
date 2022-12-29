import { AiFillHeart } from "react-icons/ai";
const About = () => {
  return (
    <>
      <div style={{ height: 400, background: "#1a1d24" }}>
        <h3>From CHEEF with</h3> <AiFillHeart color="red" size={100} />
        <h5>
          A webpage dedicated to ease the process of your stats! for more info
          join our <a href="https://discord.gg/GEvg5PFnfX">discord!</a>
          {/* prettier-ignore */}
          <br/>
          <br />
          @CHEEF
        </h5>
      </div>

      <iframe
        style={{ borderRadius: "20%", padding: 30 }}
        title="discord"
        src="https://discord.com/widget?id=943673898065596458&theme=dark"
        width="350"
        height="300"
        allowtransparency="true"
        frameborder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      ></iframe>
    </>
  );
};

export default About;
