import { ResponsiveBullet } from "@nivo/bullet";
import "./Charts.css";

const data = [
  {
    "id": "",
    "ranges": [
      0.3336816061121536,
      0.2184509493483253,
      1.5839206391675538,
      0,
      2
    ],
    "measures": [
      0.015011141606366117,
      0.03454565234304585
    ],
    "markers": [
      1.5637346292993346
    ]
  }
]

export default function Charts() {

  return (
    <div className="charts">
      <ResponsiveBullet
        data={data}
        margin={{ top: 250, right: 25, bottom: 250, left: 25 }}
        spacing={5}
        // titleAlign="start"
        titleOffsetX={-20}
        titlePosition="after"
        measureSize={0.2}
        tooltip={() => (<></>)}
        //onMarkerClick={}
        />
    </div>
  )
}
