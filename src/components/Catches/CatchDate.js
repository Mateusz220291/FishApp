const CatchDate = () => {
  const catchDate = new Date(2022, 5, 27);
  const day = catchDate.toLocaleDateString("pl", { day: "2-digit" });
  const month = catchDate.toLocaleDateString("pl", { month: "long" });
  const year = catchDate.getFullYear();

  return (
    <div>
      <label htmlFor="">date: </label>
      <span>{day}</span>
      <span>{month}</span>
      <span>{year}</span>
    </div>
  );
};

export default CatchDate;
