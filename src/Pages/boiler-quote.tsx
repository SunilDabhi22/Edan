import Header from '../Components/header';
import BoilerQuoteService from '../Components/boiler-quote-service';
import { useState } from 'react';
import QuoteResult from '../Components/boiler-quote-service/components/result';
import Footer from '../Components/footer';

export default function BoilerQuote(props: any) {

    const [result, setResult] = useState(false);

    const handleQuote = (values: any, status: boolean) => {
        console.log("values-----------------", values)
        setResult(status);
    }

    return (
        <div>
            <Header />
            {result ?
                <>
                    <QuoteResult />
                    <Footer />
                </>
                :
                <BoilerQuoteService handleQuote={handleQuote} />
            }
        </div>
    )
}