import React from "react";

export default function FoodDetails(props) {
  console.log("name", props.name);
  console.log("food name", props.details);

  return (
    <div className="container cardSpace">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">
            Name : {props.name.username}, Email : {props.name.email}, Mobile No.
            : {props.name.phone_number}
          </h3>
          {props.details.map(food => {
            return (
              <h4 className="row">
                <p className="col-1"></p>
                <p className="col-7">{food.food_name}</p>
                <p className="col-4">
                  {food.food_type === "veg" ? (
                    <p className="text-success text-center">
                      {food.food_type}{" "}
                    </p>
                  ) : (
                    <p className="text-danger text-center">{food.food_type} </p>
                  )}
                </p>
              </h4>
            );
          })}
        </div>
      </div>
    </div>
  );
}
