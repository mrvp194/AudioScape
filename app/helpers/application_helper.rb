module ApplicationHelper

  def groove_session
    Soundcloud.new({
      :client_id     => "bb3b960126fc0ee3ec16de768439927f",
      :client_secret => "7d39770bb6a7a580e69658cfef542d3b"
    })
  end

  def find_random_local_songs
    random_songs = []
    if current_users_around.empty?
      result = "Sorry! No users around right now!"
    else
      current_users_around.each do |user|
        unless user.playlists.empty?
          @playlist = user.playlists.sample
          unless @playlist.songs.empty?
            song = @playlist.songs.sample
            random_songs << [user, song]
          end
        end
      end
      return random_songs
    end

  end

end
