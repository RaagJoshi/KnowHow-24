import Header, { HeadingExtra, Card, Footer } from "../Common";
import { TeamCard } from "./Team";

export default function About() {
  const desc = [
    {
      id: 1,
      title_extra: "Vision",
      text: "To provide pivotal support & develop long lasting relationship with the companies of domestic & global knowledge economy so that such companies visit to recruit talented final year students of our college yearly, with aim to provide bright and rewarding opportunities & career to them for the valuable contributions they make in growth of company after joining the offered jobs.",
      h: "20em",
    },
    {
      id: 2,
      title_extra: "Mission",
      text: "To place competent final year students of our college in global & domestic knowledge economy companies, subsequent to acquiring required technical education by highly qualified & experienced faculties through curriculum, co-curriculum & extra curriculum activities and to train on required soft skills, best human values, attitude for continuous learning in them so that they can later on work, manange & leads their organization in efficient & effective manner in global economy.",
      h: "20em",
    },
  ];

  const bless = [
    {
      id: 24,
      img: "Website photos/24.jpg",
      name: "Prof.(Dr) Indrajit Patel",
      dept: "Principal of BVM College",
    },
    {
      id: 25,
      img: "Website photos/25.png",
      name: "Er. Bhikhubhai Patel",
      dept: "Chariman of CVM University",
    },
  ];

  const listBless = bless.map((b) => (
    <div key={b.id} className="col-sm-4 mx-auto my-3">
      <TeamCard card={b} width="20em" imgwidth="17em" height="25em" />
    </div>
  ));

  const listDesc = desc.map((d) => (
    <div key={d.id} className="col-sm-6 my-3 px-3" data-aos="zoom-in">
      <Card card={d} />
    </div>
  ));

  return (
    <div id="about">
      <Header />
      <br />
      <HeadingExtra text="With the blessings of:" />
      <div className="container text-center">
        <div className="row mx-auto">
          {listBless}
        </div>
      </div>
      <br />
      <HeadingExtra text="About Us" />
      <br />
      <div className="container">
        <div className="row mx-2">{listDesc}</div>
      </div>
      <Footer />
    </div>
  );
}
