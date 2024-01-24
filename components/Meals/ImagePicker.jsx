"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import classes from "./ImagePicker.module.css";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null);
  const imageRef = useRef();

  function handleClick() {
    imageRef.current.click();
  }

  function handleImageChange(e) {
    const file = e.target.files[0];

    if (!file) return setPickedImage(null);

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickedImage && (
            <Image src={pickedImage} alt="Image picked by the user." fill />
          )}
          {!pickedImage && <p>Please pick an image.</p>}
        </div>
        <input
          type="file"
          id={name}
          className={classes.input}
          accept=".jpg,.png,.jpeg, .webp"
          name={name}
          ref={imageRef}
          onChange={handleImageChange}
          required
        />
        <button className={classes.button} type="button" onClick={handleClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
