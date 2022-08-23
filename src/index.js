import React from 'react';
import { createRoot } from "react-dom/client";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import QuoteCarosuel from './quoteCarosuel/QuoteCarosuel';
import Blockquote from './blockquote/Blockquote';
import BlockquoteWithImage from './blockquoteWithImage/BlockquoteWithImage';
import BlockquoteWithIcon from './blockquoteWithIcon/BlockquoteWithIcon';
import SquareQuoteboxes from './squareQuoteboxes/SquareQuoteboxes';
import Quoteboxes from './quoteboxes/Quoteboxes';
import QuoteboxWithLikesCounter from './quoteboxWithLikesCounter/QuoteboxWithLikesCounter';
import Grey from './grey/Grey';
import ColorfulQuote from './colorfulQuote/ColorfulQuote';
import BlockquoteWithAvatar from './blockquoteWithAvatar/BlockquoteWithAvatar';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/quote-carosuel" element={<QuoteCarosuel />} />
        <Route path="/blockquote" element={<Blockquote />} />
        <Route path="/blockquote-with-image" element={<BlockquoteWithImage />} />
        <Route path="/blockquote-with-icon" element={<BlockquoteWithIcon />} />
        <Route path="/square-quoteboxes" element={<SquareQuoteboxes />} />
        <Route path="/quoteboxes" element={<Quoteboxes />} />
        <Route path="/quotebox-with-likes-counter" element={<QuoteboxWithLikesCounter />} />
        <Route path="/grey" element={<Grey />} />
        <Route path="/colorful-quotes" element={<ColorfulQuote />} />
        <Route path="/blockquote-with-avatar" element={<BlockquoteWithAvatar />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
