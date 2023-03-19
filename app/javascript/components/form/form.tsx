import React, {useEffect, useState} from 'react';
import {Source} from "../../business/interfaces";
import QueryParser from "../../business/queryParser";

interface Props {
  sources: Source[],
  onSubmit: (sourceId: number, query: string) => void;
}

const Form: React.FC<Props> = (props) => {
  const { sources, onSubmit } = props;
  const [sourceId, setSourceId] = useState(undefined);
  const [query, setQuery] = useState('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    setSourceId(sources[0]?.id);
  }, [sources]);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    try {
      setErrorMessage('');
      QueryParser(query);
      onSubmit(sourceId, query);
    } catch(error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <form className="Form" onSubmit={handleOnSubmit}>
      <label className="Form-queryLabel">Enter your SQL query:</label>
      <p className="Form-queryError">{errorMessage}</p>
      <textarea className="Form-queryInput" onChange={(event) => setQuery(event.target.value)} />

      <label className="Form-sourceLabel">Select the source:</label>
      <select className="Form-sourceSelect" onChange={(event) => setSourceId(Number(event.target.value))}>
        { sources?.map(source => (
          <option key={source.id} value={source.id}>{source.source_name}</option>
        )) }
      </select>
      <button className="Form-submitButton">Submit</button>
    </form>
  );
};

export default Form;
