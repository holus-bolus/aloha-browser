import "./SayHello.css";
import Image from "next/image";

const SayHello = () => {
  return (
    <section className="say-hello">
      <div className="container-full say-hello-container">
        <div className="say-hello__image-wrapper">
          <Image
            src="/images/say-hello/say-hello.svg"
            alt="The waving hand icon"
            width={190}
            height={190}
            className="say-hello-image"
          />
        </div>
        <div className="say-hello__content">
          <h2 className="say-hello__title">
            <span className="say-hello__title-text">
              Say hello to digital freedom!
            </span>
            Set
            <br />
            foot into an open internet where
            <br />
            you can be you - without all the
            <br />
            snooping.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default SayHello;
