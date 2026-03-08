import * as React from 'react';

import "./NarrativeSync.css";
import NarrativeSyncButtons from './NarrativeSyncButtons';
import NarrativeSyncWaveform from './NarrativeSyncWaveform';

export default function NarrativeSync({ videoUrl = "/video/sample-narrative-dynamic.webm",
                                        srcJson = "/video/sample-narrative-dynamic.json", markdown }) {

  return (
    <div className="narrative__sync">
      <p>TODO: NarrativeSync components:</p>
      <p>Waveform; narrative__syncWaveform</p>
      <NarrativeSyncWaveform videoUrl={videoUrl} srcJson={srcJson} />
      <p>Narrative video; narrative__syncVideo / Narrative text; narrative__syncText</p>
      <p>Narrative spreadsheet; narrative__syncSpreadsheet / Narrative buttons; narrative__syncButtons</p>
      <NarrativeSyncButtons />
    </div>
  )
}
