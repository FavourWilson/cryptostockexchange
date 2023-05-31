import "./dashboard.css"
import Script from "next/script";

export const metadata = {
  title: "Dashboard | Beta Capitals",
  description: "Beta Capitals - Leading platform to trade and investments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex justify-center w-full items-center">
        {children}
        <Script src="https://tradinghub.pw/beta/vendor/global/global.min.js" />
        <Script src="https://tradinghub.pw/beta/vendor/bootstrap-select/dist/js/bootstrap-select.min.js" />
        <Script src="https://tradinghub.pw/beta/js/custom.min.js" />
        <Script src="https://tradinghub.pw/beta/vendor/chart.js/Chart.bundle.min.js" />
        <Script src="https://tradinghub.pw/beta/vendor/peity/jquery.peity.min.js" />
        <Script src="https://tradinghub.pw/beta/vendor/apexchart/apexchart.js" />
        <Script src="https://tradinghub.pw/beta/vendor/owl-carousel/owl.carousel.js" />
        <Script src="https://tradinghub.pw/beta/js/dashboard/dashboard-4.js" />
        <Script src="https://tradinghub.pw/beta/js/deznav-init.js" />
        <Script src="https://tradinghub.pw/beta/js/demo.js" />
        <Script src="https://tradinghub.pw/beta/js/styleSwitcher.js" />
      </body>
    </html>
  );
}
