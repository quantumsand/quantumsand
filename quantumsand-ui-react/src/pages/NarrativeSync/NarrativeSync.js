import * as React from 'react';

import "./NarrativeSync.css";
import NarrativeSyncButtons from './NarrativeSyncButtons';

export default function NarrativeSync({ src, srcArrayBuffer, srcJson, markdown }) {

  return (
    <div className="narrative__sync">
      <p>TODO: NarrativeSync components:</p>
      <p>Waveform; narrative__syncWaveform</p>
      <p>Narrative video; narrative__syncVideo / Narrative text; narrative__syncText</p>
      <p>Narrative spreadsheet; narrative__syncSpreadsheet / Narrative buttons; narrative__syncButtons</p>
      <NarrativeSyncButtons />
    </div>
  )
}
