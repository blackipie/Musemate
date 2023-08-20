
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
const cheerio = require('cheerio').default;

export async function POST(request: NextRequest) {
  try {
    const reqData = await request.json();
    const { ip } = reqData;

     const response = await axios.get(`https://www.whatismyip.com/ip/${ip}`, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36',
  },
});
      const html = response.data;
       // Remove the first line (IP Address Summary)
      const $ = cheerio.load(html);
       // Remove all classes except for 'card-header'
      $('[class]:not(.card-header):not(.container-fluid)').removeAttr('class');

      $('.container-fluid').find('h1').remove();
       $('.container-fluid').find('.card-header').css({
        'text-decoration': 'underline',
        'padding-bottom': '6px',
        'padding-top': '16px',
      });
     const ipHtml = $('.container-fluid').html();
      return NextResponse.json({
            message: "Fetched successfully",
            success: true,
            ipHtml
        })

  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
