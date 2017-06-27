# == Schema Information
#
# Table name: films
#
#  id           :integer          not null, primary key
#  title        :string
#  country      :string
#  running_time :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Film < ApplicationRecord
  has_and_belongs_to_many :actor
  belongs_to :director, optional: true
end
