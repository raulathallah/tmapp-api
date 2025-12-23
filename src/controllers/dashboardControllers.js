const dashboardServices = require("../services.js/dashboardServices");
const ApiResponse = require("../utils/responses/apiResponse");

class DashboardController {
  getDashboard = async (req, res) => {
    try {
      const dashboard = await dashboardServices.getDashboard();
      return ApiResponse.success(
        res,
        "Dashboard retrieved successfully",
        dashboard
      );
    } catch (err) {
      return ApiResponse.error(
        res,
        "Failed to fetch dashboard",
        err.message,
        500
      );
    }
  };
}

module.exports = new DashboardController();
