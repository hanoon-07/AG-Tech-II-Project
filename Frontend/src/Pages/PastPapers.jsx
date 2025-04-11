import React from "react";
import Button from "../components/Button";

const PastPapers = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Searchcontents />
      </div>
      <div>
        <Papersearch />
      </div>
      <div>
        <Papercontents />
      </div>
      <br />
      <br />
    </>
  );
};

function Navbar() {
  return (
    <div className="bg-[#2563EB]">
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

function Searchcontents() {
  return (
    <div className="bg-[#D5E3FC]">
      <br />
      <div
        className="text-5xl font-bold text-black flex items-center justify-center"
        style={{ textShadow: "3px 3px 5px rgba(0, 0, 0, 0.5)" }}
      >
        All Past Papers
      </div>

      <div className=" flex  items-end justify-around p-4">
        <div>
          <label
            htmlFor="subject"
            className="block text-gray-800 mb-2 text-sm font-medium"
          >
            Subject Name:
          </label>
          <input
            id="subject"
            type="text"
            className="w-120 px-4 bg-white shadow-[5px_5px_10px_rgba(0,0,0,0.4)] focus:outline-none py-3"
            defaultValue="Discrete Mathametics 3rd Semester"
            style={{ borderRadius: "2px" }}
          />
        </div>
        <div>
          <label
            htmlFor="course"
            className="block text-gray-800 mb-2 text-sm font-medium"
          >
            Course Code
          </label>
          <input
            id="course code"
            type="text"
            className="w-30 px-4 bg-white shadow-[5px_5px_10px_rgba(0,0,0,0.4)] focus:outline-none py-3"
            defaultValue="GE-167"
            style={{ borderRadius: "2px" }}
          />
        </div>

        <div>
          <button className="flex items-center bg-blue-600 text-white font-semibold px-6 py-2 rounded-full border-2 shadow-md">
            <span className="mr-3">Search Paper</span>
            <div className="bg-white rounded-full p-1 border-2 ">
              <svg
                className="w-4 h-4 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function Papersearch() {
  return (
    <div className="flex justify-around text-xl">
      Search Result Past Paper: Discrete Mathematics 3rd Semester Course Code
      GE-167
      <br></br>
      <br></br>
    </div>
  );
}

function Papercontents() {
  return (
    <div>
      <div className="flex justify-around py-8 ">
        <div className="bg-white w-90  h-90  shadow-md rounded-lg  text-center">
          <div>
            <img
              alt="IT-201 Object Oriented Programming Past Paper 2018 ADP IT Years Program "
              src="https://media-hosting.imagekit.io/a50070f65919473e/Screenshot%202025-04-10%20104809.png?Expires=1838870304&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=s0msf5v9bmeplnIhPNPwwl4BnBu~guJ4eEs~6KTzWSw~-Bm0rNE4gDAnO2aEWekNu9iMMjF0qNEaCaTN6gvWfk-JzZiUvpe6U-NaWj1Kf4Du51hQLaDeb4Dfa3Z81lufN5R~NZEuVYR4YDRDf2hg8cyMUet0O4PRtySeWdJ4jLa-L-Fop36Ei1ZLeiAgPPuhC1q0LYZETpcgNkn9pigUAyrPtGhWP66MJbzP4EU4hhGA7dAzegNw1Rd2YsHZ7QU-ddbq~4BuugdswVNE~cwsXtUilt0AyFJC3Ogp3uOKZDfY1QZq0AhnCDS1fdX42E7NN9dEotn66DNnuoHNiSSlbA__"
              className="w-90 h-61  "
            />
          </div>
          <div className="text-sm text-black font-bold px-4">
            IT-201 Object Oriented Programming Past Paper 2018 ADP IT Years
            Program
          </div>
          <div className="text-orange-500">Punjab University</div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
            DOWNLOAD
          </Button>
        </div>

        <div className="bg-white w-90  h-90  shadow-md rounded-lg  text-center">
          <div>
            <img
              alt="IT-201 Object Oriented Programming Past Paper 2019 ADP IT Years Program "
              src="https://media-hosting.imagekit.io/7cdf87305b4b418d/Screenshot%202025-04-10%20122339.png?Expires=1838876026&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qVViOpDRluhRW9kf1sCJN4LMmTdpnuJm9kkMmdhQYikwbbZLNS2W-8s9tUll7DZ~5FFkwHNQwognBg7AwqJ9AWdhUQijRc2U61KslymeIuHt-F6tlfk3EtfDa-wZxfrAXpbhWu7QRsgRAG3bU0Ap1LYi2AalY2ofcTIvdpBy2-gPxBXFteGTkeFvygrL6UsM5yyvM3WYiRbw3pOD3cPRPkbvXbSLpye0g4kxRbLVrs8AAOyyM82IIzVIeuW5VUBsAHWd26nJyri9oxw7IJ-U-FIvHSOKKB0gFvvCeG-c8jM9eo4CudbtteSYI8~O9HkJu2AOEmxx9bIwViaWiq6XBQ__"
              className="w-90 h-61  "
            />
          </div>
          <div className="text-sm text-black font-bold px-4">
            IT-201 Object Oriented Programming Past Paper 2019 ADP IT Years
            Program
          </div>
          <div className="text-orange-500">
            UNIVERSITY OF MANAGMENT & TECHNOLOGY
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
            DOWNLOAD
          </Button>
        </div>

        <div className="bg-white w-90  h-90  shadow-md rounded-lg  text-center">
          <div>
            <img
              alt="IT-201 Object Oriented Programming Past Paper 2021 ADP IT Years Program "
              src="https://media-hosting.imagekit.io/7dd55520c98042e1/Screenshot%202025-04-10%20123308.png?Expires=1838876583&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ytu1rLOsZKp8CWwHlRxksVueW-j5duc393KY7L5gGVMGVtrGYy4xcQuQizZa40Sw1YO7huAAreh-y4GIEC20CgUqdPDmkuj1yg5TEK-NraIE1mPqUhoT8QWRsPzP1VgbsV-Hc~WeZE-fphrRf4ULa-ALnAnar5GeMbSLSbRpixC53phvR1qa~0Vb5tsbzyBWD2iV0on1ZObenbPFIW05X6xmH3tx5KZ~Wrx-9dEH9nZNnoOlpTExZIS4rtDIvBduc~3Mbhczc3Az4rerDiFzypaTHsBV7XPp796AYOYgc2GS5wi8sLIOFcvCKtIxPtgzH95XB28lxM-3o~~-NqwDDg__"
              className="w-90 h-61  "
            />
          </div>
          <div className="text-sm text-black font-bold px-4">
            IT-201 Object Oriented Programming Past Paper 2021 ADP IT Years
            Program
          </div>
          <div className="text-orange-500">Punjab University</div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
            DOWNLOAD
          </Button>
        </div>
      </div>

      <div className="flex justify-around ">
        <div className="bg-white w-90  h-90  shadow-md rounded-lg  text-center">
          <div>
            <img
              alt="IT-201 Object Oriented Programming Past Paper 2018 ADP IT Years Program "
              src="https://media-hosting.imagekit.io/a50070f65919473e/Screenshot%202025-04-10%20104809.png?Expires=1838870304&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=s0msf5v9bmeplnIhPNPwwl4BnBu~guJ4eEs~6KTzWSw~-Bm0rNE4gDAnO2aEWekNu9iMMjF0qNEaCaTN6gvWfk-JzZiUvpe6U-NaWj1Kf4Du51hQLaDeb4Dfa3Z81lufN5R~NZEuVYR4YDRDf2hg8cyMUet0O4PRtySeWdJ4jLa-L-Fop36Ei1ZLeiAgPPuhC1q0LYZETpcgNkn9pigUAyrPtGhWP66MJbzP4EU4hhGA7dAzegNw1Rd2YsHZ7QU-ddbq~4BuugdswVNE~cwsXtUilt0AyFJC3Ogp3uOKZDfY1QZq0AhnCDS1fdX42E7NN9dEotn66DNnuoHNiSSlbA__"
              className="w-90 h-61  "
            />
          </div>
          <div className="text-sm text-black font-bold px-4">
            IT-201 Object Oriented Programming Past Paper 2018 ADP IT Years
            Program
          </div>
          <div className="text-orange-500">Punjab University</div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
            DOWNLOAD
          </Button>
        </div>

        <div className="bg-white w-90  h-90  shadow-md rounded-lg  text-center">
          <div>
            <img
              alt="IT-201 Object Oriented Programming Past Paper 2019 ADP IT Years Program "
              src="https://media-hosting.imagekit.io/7cdf87305b4b418d/Screenshot%202025-04-10%20122339.png?Expires=1838876026&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qVViOpDRluhRW9kf1sCJN4LMmTdpnuJm9kkMmdhQYikwbbZLNS2W-8s9tUll7DZ~5FFkwHNQwognBg7AwqJ9AWdhUQijRc2U61KslymeIuHt-F6tlfk3EtfDa-wZxfrAXpbhWu7QRsgRAG3bU0Ap1LYi2AalY2ofcTIvdpBy2-gPxBXFteGTkeFvygrL6UsM5yyvM3WYiRbw3pOD3cPRPkbvXbSLpye0g4kxRbLVrs8AAOyyM82IIzVIeuW5VUBsAHWd26nJyri9oxw7IJ-U-FIvHSOKKB0gFvvCeG-c8jM9eo4CudbtteSYI8~O9HkJu2AOEmxx9bIwViaWiq6XBQ__"
              className="w-90 h-61  "
            />
          </div>
          <div className="text-sm text-black font-bold px-4">
            IT-201 Object Oriented Programming Past Paper 2019 ADP IT Years
            Program
          </div>
          <div className="text-orange-500">
            UNIVERSITY OF MANAGMENT & TECHNOLOGY
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
            DOWNLOAD
          </Button>
        </div>

        <div className="bg-white w-90   h-90  shadow-md rounded-lg  text-center">
          <div>
            <img
              alt="IT-201 Object Oriented Programming Past Paper 2021 ADP IT Years Program "
              src="https://media-hosting.imagekit.io/7dd55520c98042e1/Screenshot%202025-04-10%20123308.png?Expires=1838876583&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ytu1rLOsZKp8CWwHlRxksVueW-j5duc393KY7L5gGVMGVtrGYy4xcQuQizZa40Sw1YO7huAAreh-y4GIEC20CgUqdPDmkuj1yg5TEK-NraIE1mPqUhoT8QWRsPzP1VgbsV-Hc~WeZE-fphrRf4ULa-ALnAnar5GeMbSLSbRpixC53phvR1qa~0Vb5tsbzyBWD2iV0on1ZObenbPFIW05X6xmH3tx5KZ~Wrx-9dEH9nZNnoOlpTExZIS4rtDIvBduc~3Mbhczc3Az4rerDiFzypaTHsBV7XPp796AYOYgc2GS5wi8sLIOFcvCKtIxPtgzH95XB28lxM-3o~~-NqwDDg__"
              className="w-90 h-61  "
            />
          </div>
          <div className="text-sm text-black font-bold px-4">
            IT-201 Object Oriented Programming Past Paper 2021 ADP IT Years
            Program
          </div>
          <div className="text-orange-500">Punjab University</div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
            DOWNLOAD
          </Button>
        </div>
      </div>

      <div className="flex justify-around py-8 ">
        <div className="bg-white w-90  h-90  shadow-md rounded-lg  text-center">
          <div>
            <img
              alt="IT-201 Object Oriented Programming Past Paper 2018 ADP IT Years Program "
              src="https://media-hosting.imagekit.io/a50070f65919473e/Screenshot%202025-04-10%20104809.png?Expires=1838870304&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=s0msf5v9bmeplnIhPNPwwl4BnBu~guJ4eEs~6KTzWSw~-Bm0rNE4gDAnO2aEWekNu9iMMjF0qNEaCaTN6gvWfk-JzZiUvpe6U-NaWj1Kf4Du51hQLaDeb4Dfa3Z81lufN5R~NZEuVYR4YDRDf2hg8cyMUet0O4PRtySeWdJ4jLa-L-Fop36Ei1ZLeiAgPPuhC1q0LYZETpcgNkn9pigUAyrPtGhWP66MJbzP4EU4hhGA7dAzegNw1Rd2YsHZ7QU-ddbq~4BuugdswVNE~cwsXtUilt0AyFJC3Ogp3uOKZDfY1QZq0AhnCDS1fdX42E7NN9dEotn66DNnuoHNiSSlbA__"
              className="w-90 h-61  "
            />
          </div>
          <div className="text-sm text-black font-bold px-4">
            IT-201 Object Oriented Programming Past Paper 2018 ADP IT Years
            Program
          </div>
          <div className="text-orange-500">Punjab University</div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
            DOWNLOAD
          </Button>
        </div>

        <div className="bg-white w-90  h-90  shadow-md rounded-lg  text-center">
          <div>
            <img
              alt="IT-201 Object Oriented Programming Past Paper 2019 ADP IT Years Program "
              src="https://media-hosting.imagekit.io/7cdf87305b4b418d/Screenshot%202025-04-10%20122339.png?Expires=1838876026&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qVViOpDRluhRW9kf1sCJN4LMmTdpnuJm9kkMmdhQYikwbbZLNS2W-8s9tUll7DZ~5FFkwHNQwognBg7AwqJ9AWdhUQijRc2U61KslymeIuHt-F6tlfk3EtfDa-wZxfrAXpbhWu7QRsgRAG3bU0Ap1LYi2AalY2ofcTIvdpBy2-gPxBXFteGTkeFvygrL6UsM5yyvM3WYiRbw3pOD3cPRPkbvXbSLpye0g4kxRbLVrs8AAOyyM82IIzVIeuW5VUBsAHWd26nJyri9oxw7IJ-U-FIvHSOKKB0gFvvCeG-c8jM9eo4CudbtteSYI8~O9HkJu2AOEmxx9bIwViaWiq6XBQ__"
              className="w-90 h-61  "
            />
          </div>
          <div className="text-sm text-black font-bold px-4">
            IT-201 Object Oriented Programming Past Paper 2019 ADP IT Years
            Program
          </div>
          <div className="text-orange-500">
            UNIVERSITY OF MANAGMENT & TECHNOLOGY
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
            DOWNLOAD
          </Button>
        </div>

        <div className="bg-white w-90  h-90  shadow-md rounded-lg  text-center">
          <div>
            <img
              alt="IT-201 Object Oriented Programming Past Paper 2021 ADP IT Years Program "
              src="https://media-hosting.imagekit.io/7dd55520c98042e1/Screenshot%202025-04-10%20123308.png?Expires=1838876583&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ytu1rLOsZKp8CWwHlRxksVueW-j5duc393KY7L5gGVMGVtrGYy4xcQuQizZa40Sw1YO7huAAreh-y4GIEC20CgUqdPDmkuj1yg5TEK-NraIE1mPqUhoT8QWRsPzP1VgbsV-Hc~WeZE-fphrRf4ULa-ALnAnar5GeMbSLSbRpixC53phvR1qa~0Vb5tsbzyBWD2iV0on1ZObenbPFIW05X6xmH3tx5KZ~Wrx-9dEH9nZNnoOlpTExZIS4rtDIvBduc~3Mbhczc3Az4rerDiFzypaTHsBV7XPp796AYOYgc2GS5wi8sLIOFcvCKtIxPtgzH95XB28lxM-3o~~-NqwDDg__"
              className="w-90 h-61  "
            />
          </div>
          <div className="text-sm text-black font-bold px-4">
            IT-201 Object Oriented Programming Past Paper 2021 ADP IT Years
            Program
          </div>
          <div className="text-orange-500">Punjab University</div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
            DOWNLOAD
          </Button>
        </div>
      </div>

      <div className="flex justify-around py-8 ">
        <div className="bg-white w-90  h-90  shadow-md rounded-lg  text-center">
          <div>
            <img
              alt="IT-201 Object Oriented Programming Past Paper 2018 ADP IT Years Program "
              src="https://media-hosting.imagekit.io/a50070f65919473e/Screenshot%202025-04-10%20104809.png?Expires=1838870304&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=s0msf5v9bmeplnIhPNPwwl4BnBu~guJ4eEs~6KTzWSw~-Bm0rNE4gDAnO2aEWekNu9iMMjF0qNEaCaTN6gvWfk-JzZiUvpe6U-NaWj1Kf4Du51hQLaDeb4Dfa3Z81lufN5R~NZEuVYR4YDRDf2hg8cyMUet0O4PRtySeWdJ4jLa-L-Fop36Ei1ZLeiAgPPuhC1q0LYZETpcgNkn9pigUAyrPtGhWP66MJbzP4EU4hhGA7dAzegNw1Rd2YsHZ7QU-ddbq~4BuugdswVNE~cwsXtUilt0AyFJC3Ogp3uOKZDfY1QZq0AhnCDS1fdX42E7NN9dEotn66DNnuoHNiSSlbA__"
              className="w-90 h-61  "
            />
          </div>
          <div className="text-sm text-black font-bold px-4">
            IT-201 Object Oriented Programming Past Paper 2018 ADP IT Years
            Program
          </div>
          <div className="text-orange-500">Punjab University</div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
            DOWNLOAD
          </Button>
        </div>

        <div className="bg-white w-90  h-90  shadow-md rounded-lg  text-center">
          <div>
            <img
              alt="IT-201 Object Oriented Programming Past Paper 2019 ADP IT Years Program "
              src="https://media-hosting.imagekit.io/7cdf87305b4b418d/Screenshot%202025-04-10%20122339.png?Expires=1838876026&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qVViOpDRluhRW9kf1sCJN4LMmTdpnuJm9kkMmdhQYikwbbZLNS2W-8s9tUll7DZ~5FFkwHNQwognBg7AwqJ9AWdhUQijRc2U61KslymeIuHt-F6tlfk3EtfDa-wZxfrAXpbhWu7QRsgRAG3bU0Ap1LYi2AalY2ofcTIvdpBy2-gPxBXFteGTkeFvygrL6UsM5yyvM3WYiRbw3pOD3cPRPkbvXbSLpye0g4kxRbLVrs8AAOyyM82IIzVIeuW5VUBsAHWd26nJyri9oxw7IJ-U-FIvHSOKKB0gFvvCeG-c8jM9eo4CudbtteSYI8~O9HkJu2AOEmxx9bIwViaWiq6XBQ__"
              className="w-90 h-61  "
            />
          </div>
          <div className="text-sm text-black font-bold px-4">
            IT-201 Object Oriented Programming Past Paper 2019 ADP IT Years
            Program
          </div>
          <div className="text-orange-500">
            UNIVERSITY OF MANAGMENT & TECHNOLOGY
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
            DOWNLOAD
          </Button>
        </div>

        <div className="bg-white w-90  h-90  shadow-md rounded-lg  text-center">
          <div>
            <img
              alt="IT-201 Object Oriented Programming Past Paper 2021 ADP IT Years Program "
              src="https://media-hosting.imagekit.io/7dd55520c98042e1/Screenshot%202025-04-10%20123308.png?Expires=1838876583&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ytu1rLOsZKp8CWwHlRxksVueW-j5duc393KY7L5gGVMGVtrGYy4xcQuQizZa40Sw1YO7huAAreh-y4GIEC20CgUqdPDmkuj1yg5TEK-NraIE1mPqUhoT8QWRsPzP1VgbsV-Hc~WeZE-fphrRf4ULa-ALnAnar5GeMbSLSbRpixC53phvR1qa~0Vb5tsbzyBWD2iV0on1ZObenbPFIW05X6xmH3tx5KZ~Wrx-9dEH9nZNnoOlpTExZIS4rtDIvBduc~3Mbhczc3Az4rerDiFzypaTHsBV7XPp796AYOYgc2GS5wi8sLIOFcvCKtIxPtgzH95XB28lxM-3o~~-NqwDDg__"
              className="w-90 h-61  "
            />
          </div>
          <div className="text-sm text-black font-bold px-4">
            IT-201 Object Oriented Programming Past Paper 2021 ADP IT Years
            Program
          </div>
          <div className="text-orange-500">Punjab University</div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
            DOWNLOAD
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PastPapers;
