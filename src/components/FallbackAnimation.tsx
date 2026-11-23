import Image from "next/image";

const FallbackAnimation = () => {
  return (
    <section className="bg-black h-screen">
      <Image
        src="/loader/madbars.gif"
        alt="fallbackloading"
        width={50}
        height={50}
        className="place-self-center"
      />
    </section>
  );
};

export default FallbackAnimation;
