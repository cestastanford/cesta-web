require 'rake'
require 'date'
require 'yaml'

task :default => :rsync

desc "Build site with Jekyll"
task :build do
  system 'bundle exec jekyll build'
end

desc "Preview"
task :preview do
  system 'bundle exec jekyll serve'
end

desc "Deploy site with rsync"
task :rsync => [:build] do
  puts "\n Deploying site with rsync..."

  ssh_port      = "22"
  ssh_user      = "cestasta@cestastanford.org"
  rsync_delete  = true
  rsync_options = "--checksum --stats -avz -e"
  public_dir    = "_site"
  document_root = "~/public_html/dev/"

  exclude = ""
  if File.exists?('./rsync-exclude')
    exclude = "--exclude-from '#{File.expand_path('./rsync-exclude')}'"
  end

  ok_failed system ("rsync #{rsync_options} 'ssh -p #{ssh_port}' #{exclude} #{"--delete" unless rsync_delete == false} #{public_dir}/ #{ssh_user}:#{document_root}")

end

def ok_failed(condition)
  if (condition)
    puts "OK"
  else
    puts "FAILED"
  end
end
