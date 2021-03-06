import * as React from 'react';
import { Result } from '../types';
import DateUtil from '../DateUtil';

export interface Props {
  results: Result[];
}

function CompactList(props: Props) {
  const results = props.results.map((res) => (
    <tr key={res.id}>
      <td>{DateUtil.short(res.date)}</td>
      <td style={{ paddingLeft: '10px' }}>{res.winner.name}</td>
    </tr>
  ));

  return <table><tbody>{results}</tbody></table>;
}

export default CompactList;
