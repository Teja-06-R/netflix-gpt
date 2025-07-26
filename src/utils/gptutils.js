import { GoogleGenAI } from "@google/genai";
import {Google_API_KEY} from './constant';
import { GoogleGenerativeAI } from "@google/generative-ai";

const ai = new GoogleGenAI({
  apiKey: Google_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default ai;











/*const client = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser:true, // This is the default and can be omitted
});
*/