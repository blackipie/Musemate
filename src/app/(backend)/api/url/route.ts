
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
const cheerio = require('cheerio').default;

export async function POST(request: NextRequest) {
  try {
    const reqData = await request.json();
    const { url } = reqData;
    console.log(url)


  const response = await axios.get(`https://linkunshorten.com/?url=${url}`);
  console.log('Response from unshorten service:', response);
    
    // const unshortenedUrl = response.request.res.responseUrl; // Get the final URL after following redirects
    // const unshortenedResponse = await axios.get(unshortenedUrl);
    // const unshortenedData = unshortenedResponse.data;
    // const Data = unshortenedData 
    // console.log(Data)
    //  const $ = cheerio.load(Data);
    //  const rawData = $('.df-raw').text();
          return NextResponse.json({
            message: "Fetched successfully",
            success: true,
            url
        })

  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
