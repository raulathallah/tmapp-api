const commentServices = require("../services.js/commentServices");
const ApiResponse = require("../utils/responses/apiResponse");

class CommentController {
  getAllCommentsByTaskId = async (req, res) => {
    try {
      const { id } = req.params;
      const comments = await commentServices.findByTaskId(id);
      return ApiResponse.success(
        res,
        "Comments retrieved successfully",
        comments
      );
    } catch (err) {
      return ApiResponse.error(
        res,
        "Failed to fetch comment",
        err.message,
        500
      );
    }
  };

  create = async (req, res) => {
    try {
      const comments = await commentServices.create(req.body);
      return ApiResponse.success(
        res,
        "Comments created successfully",
        comments
      );
    } catch (err) {
      return ApiResponse.error(
        res,
        "Failed to create comment",
        err.message,
        500
      );
    }
  };

  update = async (req, res) => {
    try {
      const { id } = req.params;
      const comments = await commentServices.update(id, req.body);
      return ApiResponse.success(
        res,
        "Comments updated successfully",
        comments
      );
    } catch (err) {
      return ApiResponse.error(
        res,
        "Failed to update comment",
        err.message,
        500
      );
    }
  };

  delete = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteCmts = await commentServices.delete(id);
      res.status(201).json({
        success: true,
        message: "Comments deleted successfully",
        data: deleteCmts,
      });
    } catch (err) {
      res.status(400).json({ success: false, error: err.message });
    }
  };
}

module.exports = new CommentController();
