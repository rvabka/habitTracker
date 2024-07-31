import { useState } from "react";
import Popup from "reactjs-popup";
import { GoNoEntry } from "react-icons/go";

export default function BadHabbit() {
  const [open, setOpen] = useState<boolean>(false);
  const closeModal = () => setOpen(false);
  return (
    <div>
      <button
        type="button"
        className="flex flex-col items-center justify-center rounded-full bg-second p-3 text-white transition duration-200 hover:scale-105 hover:text-babyBlue"
        onClick={() => setOpen((o) => !o)}
      >
        <GoNoEntry size={30} />
      </button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="">
          <a className="" onClick={closeModal}>
            &times;
          </a>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni
          omnis delectus nemo, maxime molestiae dolorem numquam mollitia,
          voluptate ea, accusamus excepturi deleniti ratione sapiente!
          Laudantium, aperiam doloribus. Odit, aut.
        </div>
      </Popup>
    </div>
  );
}
