class ProjectsController < ApplicationController

  def index
    @projects = Project.all
    render json: @projects
  end

  def show
    @tasks = Task.where(project_id: params[:id])
    @project = Project.find(params[:id])
    @taskInput = Task.new()
  end

end
