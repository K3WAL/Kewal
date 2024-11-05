import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import Fox from "../models/Fox";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const [isLoading, setIsLoading] = useState(false);
  const [cusrrentAnimation, setcurrentAnimation] = useState("mixamo.com");

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => setcurrentAnimation("Hip Hop Dancing");
  const handleBlur = () => setcurrentAnimation("mixamo.com");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setcurrentAnimation("Running");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          to_name: "Kewal",
          email: form.email,
          to_email: "kewaluchiha@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        showAlert({
          show: true,
          text: "Message sent successfully!",
          type: "success",
        });
        setTimeout(() => {
          hideAlert();
          setcurrentAnimation("mixamo.com");
        }, [900]);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setIsLoading(false);
        setcurrentAnimation("mixamo.com");
        console.log(error);
        showAlert({
          show: true,
          text: "I didnot receive your message",
          type: "danger",
        });
      });
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">
      {alert.show && <Alert {...alert} />}

      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Uchiha"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="example@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Send me message"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <div
        className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]"
        style={{ marginTop: "80px" }}
      >
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 70,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={cusrrentAnimation}
              position={[0.0000041253, -2.0234598603, 0.1178159442]}
              rotation={[0, 0, 0]}
              scale={[-2, 1.7, 0.5134029317]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
