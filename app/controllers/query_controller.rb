class QueryController < ApplicationController
  before_action :require_login

  def execute
    user = User.find_by(id: session[:user_id])
    source = user.sources.find_by(id: params[:source_id])
    query_text = params[:query_text]

    if source
      result = Query.run_query(source, query_text)
      render json: result
    else
      render json: { error: 'Invalid source id' }, status: :unprocessable_entity
    end
  end
end
