class VisitorsController < ApplicationController
	before_action :authenticate_user!

  def index
    # client = Grooveshark::Client.new
    client = Soundcloud.new({
      :client_id     => "bb3b960126fc0ee3ec16de768439927f",
      :client_secret => "7d39770bb6a7a580e69658cfef542d3b"
    })
	# code = params[:code]
	# access_token = client.exchange_token(:code => code)
    # session[:groove_session] = access_token
    # puts current_user
    @user = current_user
    session[:user_id] = @user.id
    @playlists = @user.playlists
    @last_playlists = @playlists.last(6).reverse
    @other_playlists = (@playlists - @last_playlists.reverse).reverse
    # render 'index', layout: false
  end







end


