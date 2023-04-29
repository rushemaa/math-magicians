import { useState, useEffect } from 'react';

function Quote() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'X-Api-Key': 'fPDSASAybkPlC1zJqs0eHw==sn9S3RCMhFwo7kK8',
          Origin: '*',
        },
      };

      try {
        const res = await fetch(
          'https://api.api-ninjas.com/v1/quotes',
          requestOptions,
        );
        const data = await res.text();
        const jsonQuote = await JSON.parse(data);
        setQuotes(jsonQuote);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setQuotes, setIsLoading]);

  if (hasError) return <div>Something went wrong!</div>;
  if (isLoading) return <div>Loading...</div>;
  if (quotes.length > 0) {
    return (
      <div>
        <h4>{quotes[0].quote}</h4>
        <i>
          Author:
          {quotes[0].author}
        </i>
        <br />
        <i>
          Category:
          {quotes[0].category}
        </i>
      </div>
    );
  }
}

export default Quote;
