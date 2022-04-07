import React, { useState } from "react";
import Axios from "axios";
import { toast } from "react-toastify";
import { API_BASE_URL } from "../../constants/ApiBaseUrl";

const AdminPortfolio = () => {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [verticals, setVerticals] = useState(["ff", "kk"]);
  const [technologies, setTechnologies] = useState(["ff", "kk"]);
  const [expertise, setExpertise] = useState(["ff", "ll"]);

  const validateForm = (e) => {
    e.preventDefault();
    if (
      !heading ||
      !description ||
      !technologies ||
      !verticals ||
      !expertise ||
      !image
    ) {
      toast.error("please fill the fields", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    // try {
    var data = new FormData();

    data.append("heading", heading);
    data.append("description", description);
    data.append("technologies", technologies);
    data.append("verticals", verticals);
    data.append("expertise", expertise);
    data.append("image", image, image.name);
    const res = await Axios.post(
      `${API_BASE_URL}/addPortfolio`,
      data,

      {
        headers: {
          accept: "application/json",
          "Accept-Language": "en-US,en;q=0.8",
          "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
        },
      }
    );
    console.log("contact form", res.data.message);
    if (res.status === 422) {
      toast.error("form submit failed", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    } else {
      toast(res.data.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      // }
    }
    // catch (error) {
    //   toast.error(error);
    // }
  };
  const handleOnChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <>
      {console.log("image", image)}
      <div
        style={{ minWidth: "58vmin" }}
        // method="POST"
        // onSubmit={validateForm}
        // enctype="multipart/form-data"
      >
        <h1 className="text-center" style={{ color: "#1abc9c" }}>
          Portfolio Section
        </h1>
        <div class="form-group m-2">
          <label for="exampleFormControlInput1">Title</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Portfolio Title"
            value={heading}
            name="heading"
            onChange={(e) => setHeading(e.target.value)}
          />
        </div>
        <div class="form-group m-2">
          <label for="exampleFormControlFile1">Upload Image</label>
          <input
            type="file"
            class="form-control-file"
            id="exampleFormControlFile1"
            name="image"
            // value={image}
            // onClick={handleInputClicked}
            // accept="image/x-png,image/jpeg,image/gif"
            onChange={handleOnChange}
            // onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div class="form-group m-2">
          <label for="exampleFormControlInput1">Expertise</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Portfolio Expertise"
            name="expertise"
            // value={expertise}
            // onChange={(e) => setExpertise(e.target.value)}
          />
        </div>

        <div class="form-group m-2">
          <label for="exampleFormControlInput1">Verticals</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Portfolio Verticals"
            name="verticals"
            // value={verticals}
            // onChange={(e) => setVerticals(e.target.value)}
          />
        </div>

        <div class="form-group m-2">
          <label for="exampleFormControlInput1">Technologies</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            name="technologies"
            placeholder="Portfolio Technologies"
            // value={technologies}
            // onChange={(e) => setTechnologies(e.target.value)}
          />
        </div>

        <div class="form-group m-2">
          <label for="exampleFormControlTextarea1">Description</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={description}
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button
          // type="submit"
          class="btn btn-primary w-100 m-2"
          onClick={validateForm}
          style={{ background: "#1abc9c", border: "none" }}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default AdminPortfolio;
