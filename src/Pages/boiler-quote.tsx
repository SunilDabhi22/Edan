import Header from '../Components/header';
import BoilerQuoteService from '../Components/boiler-quote-service';
import { useState } from 'react';
import QuoteResult from '../Components/boiler-quote-service/components/result';
import Footer from '../Components/footer';

export default function BoilerQuote(props: any) {

    const [result, setResult] = useState(false);
    const [data, setData] = useState(null);

    const handleQuote = (values: any, status: boolean) => {
        setResult(status);
        setData(values)
    }

    return (
        <div>
            <Header />
            {result ?
                <>
                    <QuoteResult data={data} />
                    <Footer />
                </>
                :
                <BoilerQuoteService handleQuote={handleQuote} />
            }
        </div>
    )
}