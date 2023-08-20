
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
const cheerio = require('cheerio').default;

export async function POST(request: NextRequest) {
  try {
    const reqData = await request.json();
    const { domain } = reqData;

     const response = await axios.get(`https://www.whois.com/whois/${domain}`);
     const whoisData = response.data      
     const $ = cheerio.load(whoisData);
     const rawWhoisData = $('.df-raw').text();
          return NextResponse.json({
            message: "Fetched successfully",
            success: true,
            rawWhoisData
        })

  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
