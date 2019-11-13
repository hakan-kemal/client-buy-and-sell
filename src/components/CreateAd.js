import React from "react";

export default function({ onSubmit, onChange, values }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Title</label>
        <input
          name="title"
          type="text"
          value={values.title}
          onChange={onChange}
        ></input>

        <label>Description</label>
        <input
          name="description"
          type="text"
          value={values.description}
          onChange={onChange}
        ></input>

        <label>Picture</label>
        <input
          name="url"
          type="text"
          value={values.url}
          onChange={onChange}
        ></input>

        <label>Price</label>
        <input
          name="price"
          type="text"
          value={values.price}
          onChange={onChange}
        ></input>

        <label>Email</label>
        <input
          name="email"
          type="text"
          value={values.email}
          onChange={onChange}
        ></input>

        <label>Phone</label>
        <input
          name="phone"
          type="text"
          value={values.phone}
          onChange={onChange}
        ></input>

        <input type="submit"></input>
      </form>
    </div>
  );
}
