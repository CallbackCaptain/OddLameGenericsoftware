import "./styles.css";

const Qwe = () => {
  const isMobail = false
  const wtags = 200;
  const mob = { rad: 2, wtags: 200 }
  const rad = 34
  const tegs = ["ad"]

  return (
    <div style={{ width: "100%" }}>
    <div
        className="serviceCard__tags"
        style={isMobail ? {
          width: mob.wtags,
          height: 145
        } : { width: wtags }}
      />

      <div
        className="serviceCard__rl"
        style={isMobail ? {
          top: 42,
        } : {}}
      />

      <div
        className="serviceCard__rr"
        style={{ left: isMobail ? mob.rad : rad }}
      />

      <div
        className="serviceCard__itemsv"
        style={isMobail ? {
          flexDirection: "column",
          gap: 8
        } : {}}
      >
        {tegs.map((tag) => (
          <div
            className="serviceCard__itemv"
            kay={tag}
          >
              {tag}
          </div>
        ))}
      </div>

      <div className="serviceCard__content">

      </div>
      </div>
  )
}

export default Qwe;
