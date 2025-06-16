import { Button } from "@/components/ui/button";
import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="section-card bg-[#d5ebff] flex justify-between flex-col lg:flex-row">
      <div className="lg:w-1/2 p-5 order-2 lg:order-1">
        <p className="text-gray-700 text-sm lg:text-base">
          Monitor your system’s performance in real time, stay updated with the
          latest data and alerts, and gain valuable insights. Use this dashboard
          to track key metrics and make informed decisions based on up-to-date
          analytics.
        </p>
        <Button size={"lg"} className="mt-5 flex items-center justify-center">
          see more
          <ChevronsRight />
        </Button>
      </div>
      {/* src="https://img.freepik.com/premium-vector/data-analytics-dashboard-business-finance-report-business-people-working-data-analytics-monitoring-web-report-business-finance-investment-concept-vector-illustration-flat-style_165488-3992.jpg" */}
      <div className="sm:col-span-4 flex justify-center lg:justify-start">
        <Image
          src="https://static.vecteezy.com/system/resources/thumbnails/022/479/658/small_2x/web-report-dashboard-concept-business-people-team-meeting-for-data-analytics-and-monitoring-data-analytics-research-for-business-financial-planning-flat-design-illustration-vector.jpg"
          alt="logo"
          width="300"
          height="250"
        />
      </div>
    </div>
  );
}
