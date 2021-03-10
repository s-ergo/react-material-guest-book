import axios from "axios";

const handleFeedbackSend = async (e, data) => {
  e.preventDefault();

  if (!data.name || !data.mail || !data.feedback || data.isError) {
    return;
  }

  axios
    .post("/add", {
      data: {
        name: data.name,
        mail: data.mail,
        page: data.homePage,
        feedback: data.feedback,
        image: data.image,
      },
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
    .then((res) => {
      document.location.href = "/";
    });
};

export default handleFeedbackSend;
