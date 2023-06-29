var documenterSearchIndex = {"docs":
[{"location":"imagelist/#imagelist","page":"List of images","title":"List of test images","text":"","category":"section"},{"location":"imagelist/","page":"List of images","title":"List of images","text":"info: Metadata of the images\nCurrently, the table below does not contain Note section. For more infomation about their metadata, see metadata.yml","category":"page"},{"location":"imagelist/","page":"List of images","title":"List of images","text":"Image Name Color Size Note\n(Image: ) airplaneF16.tiff RGB{N0f8} (512, 512) \n(Image: ) autumn_leaves.png RGBA{N0f16} (105, 140) \n(Image: ) barbara_color.png RGB{N0f8} (576, 720) \n(Image: ) barbara_gray_512.bmp RGB{N0f8} (512, 512) \n(Image: ) blobs.gif RGB{N0f8} (254, 256) \n(Image: ) cameraman.tif Gray{N0f8} (512, 512) \n(Image: ) chelsea.png RGB{N0f8} (300, 451) \n(Image: ) coffee.png RGB{N0f8} (400, 600) \n(Image: ) earth_apollo17.jpg RGB{N0f8} (3002, 3000) \n(Image: ) fabio_color_256.png RGB{N0f8} (256, 256) \n(Image: ) fabio_color_512.png RGB{N0f8} (512, 512) \n(Image: ) fabio_gray_256.png Gray{N0f8} (256, 256) \n(Image: ) fabio_gray_512.png Gray{N0f8} (512, 512) \n(Image: ) hela-cells.tif RGB{N0f16} (512, 672) \n(Image: ) house.tif GrayA{N0f8} (512, 512) \n(Image: ) jetplane.tif GrayA{N0f8} (512, 512) \n(Image: ) lake_color.tif RGB{N0f8} (512, 512) \n(Image: ) lake_gray.tif GrayA{N0f8} (512, 512) \n(Image: ) lena_color_256.tif RGB{N0f8} (256, 256) \n(Image: ) lena_color_512.tif RGB{N0f8} (512, 512) \n(Image: ) lena_gray_16bit.png Gray{N0f16} (256, 256) \n(Image: ) lena_gray_256.tif Gray{N0f8} (256, 256) \n(Image: ) lena_gray_512.tif Gray{N0f8} (512, 512) \n(Image: ) lighthouse.png RGB{N0f8} (512, 768) \n(Image: ) livingroom.tif Gray{N0f8} (512, 512) \n(Image: ) m51.tif Gray{N0f16} (510, 320) \n(Image: ) mandril_color.tif RGB{N0f8} (512, 512) \n(Image: ) mandril_gray.tif Gray{N0f8} (512, 512) \n(Image: ) mandrill.tiff RGB{N0f8} (512, 512) \n(Image: ) monarch_color.png RGB{N0f8} (512, 768) \n(Image: ) monarch_color_256.png RGB{N0f8} (256, 256) \n(Image: ) moonsurface.tiff Gray{N0f8} (256, 256) \n(Image: ) morphology_test_512.tiff RGB{N0f8} (512, 512) \n(Image: ) mountainstream.png RGB{N0f8} (512, 768) \n(Image: ) mri-stack.tif Gray{N0f8} (226, 186, 27) \n(Image: ) multi-channel-time-series.ome.tif Gray{N0f8} (167, 439, 3, 7) \n(Image: ) peppers_color.tif RGB{N0f8} (512, 512) \n(Image: ) peppers_gray.tif GrayA{N0f8} (512, 512) \n(Image: ) pirate.tif Gray{N0f8} (512, 512) \n(Image: ) resolution_test_1920.tif Gray{N0f8} (1920, 1920) \n(Image: ) resolution_test_512.tif Gray{N0f8} (512, 512) \n(Image: ) simple_3d_ball.tif Gray{N0f8} (64, 64, 64) \n(Image: ) simple_3d_psf.tif Gray{N0f8} (64, 64, 64) \n(Image: ) sudoku.tiff RGB{N0f8} (512, 512) \n(Image: ) toucan.png RGBA{N0f8} (150, 162) \n(Image: ) walkbridge.tif GrayA{N0f8} (512, 512) \n(Image: ) woman_blonde.tif Gray{N0f8} (512, 512) \n(Image: ) woman_darkhair.tif Gray{N0f8} (512, 512) ","category":"page"},{"location":"contributing/#Contributing","page":"Contributing","title":"Contributing","text":"","category":"section"},{"location":"contributing/#Adding-images","page":"Contributing","title":"Adding images","text":"","category":"section"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"Anyone can contribute images to this repository by submitting a pull request at the github repo.","category":"page"},{"location":"contributing/#Step-1:-adding-images-to-images-branch","page":"Contributing","title":"Step 1: adding images to images branch","text":"","category":"section"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"The following steps should be followed to add an image/imageset to the repository:","category":"page"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"Check the images for copyright or license issues before adding images.\nDo git checkout images in your local repository folder. Pkg.dir(\"TestImages\") gives the location of the repo.\nAdd the image locally to the images/ folder on your machine.\nIf you have metadata, a more common name, a url for the source or an author, you can add that to the metadata.yml.\nDo git add --all to stage the changes for a commit.\ngit commit -m \"Adds <filename> to the repository from link <link>\"\ngit push <fork> images\nNow submit a pull request to the images branch. Once accepted, the image or imageset will be stored at https://github.com/JuliaImages/TestImages.jl/blob/images/images/<filename>.","category":"page"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"Now that the images are added to the repository, maintainers will then create a tag(not release) v*-artifacts (e.g., v1.5.0-artifacts) for images branch and push it to the repo. After that, github action CI defined in images branch will be triggered, build and release an tarball artifact for this commit.","category":"page"},{"location":"contributing/#Step-2:-update-master-branch","page":"Contributing","title":"Step 2: update master branch","text":"","category":"section"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"The next step is to modify the source files of the TestImages.jl package to make them available for download, i.e., add it to remotefiles list.","category":"page"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"Do git checkout master to return to the master branch.\nModify src/TestImages.jl : Add an entry with the filename to the remotefiles dictionary.\nModify Artifacts.toml: updates [images] section with the newly released artifacts.\nDo git add --all to add the changed source files.\ngit commit -m \"Adds <filename> to package\"\ngit push <fork> master\nNow submit a pull request to the master branch. Once accepted, the image or imageset will be available for download to users of TestImages.jl.","category":"page"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"See PR#123 for an example.","category":"page"},{"location":"contributing/#Others","page":"Contributing","title":"Others","text":"","category":"section"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"Feel free to open issues or pull-requests. If you have any questions, you can ask in Discourse or #image-processing channel in Slack.","category":"page"},{"location":"functionreference/#Function-reference","page":"Function reference","title":"Function reference","text":"","category":"section"},{"location":"functionreference/#Image-loaders","page":"Function reference","title":"Image loaders","text":"","category":"section"},{"location":"functionreference/","page":"Function reference","title":"Function reference","text":"testimage\nTestImages.shepp_logan","category":"page"},{"location":"functionreference/#TestImages.testimage","page":"Function reference","title":"TestImages.testimage","text":"img = testimage(filename; download_only=false, [ops...])\n\nLoad test image that partially matches filename, the first match is used if there're more than one.\n\nIf download_only=true, the full filepath is returned. Any other keyword arguments ops will be passed to image IO backend through FileIO.load.\n\nExample\n\njulia> using TestImages\njulia> img = testimage(\"cameraman.tif\"); # fullname\njulia> img = testimage(\"cameraman\"); # without extension works\njulia> img = testimage(\"c\"); # with only partial name also works\n\nExtended help\n\nThe following is a complete list of testimages, you can also check them at https://testimages.juliaimages.org/\n\n\"airplaneF16\"\n\"autumn_leaves\"\n\"barbara_color\"\n\"barbara_gray_512\"\n\"blobs\"\n\"cameraman\"\n\"chelsea\"\n\"coffee\"\n\"earth_apollo17\"\n\"fabio_color_256\"\n\"fabio_color_512\"\n\"fabio_gray_256\"\n\"fabio_gray_512\"\n\"hela-cells\"\n\"house\"\n\"jetplane\"\n\"lake_color\"\n\"lake_gray\"\n\"lena_color_256\"\n\"lena_color_512\"\n\"lena_gray_16bit\"\n\"lena_gray_256\"\n\"lena_gray_512\"\n\"lighthouse\"\n\"livingroom\"\n\"m51\"\n\"mandril_color\"\n\"mandril_gray\"\n\"mandrill\"\n\"monarch_color\"\n\"monarch_color_256\"\n\"moonsurface\"\n\"morphology_test_512\"\n\"mountainstream\"\n\"mri-stack\"\n\"multi-channel-time-series.ome\"\n\"peppers_color\"\n\"peppers_gray\"\n\"pirate\"\n\"resolution_test_1920\"\n\"resolution_test_512\"\n\"simple_3d_ball\"\n\"simple_3d_psf\"\n\"sudoku\"\n\"toucan\"\n\"walkbridge\"\n\"woman_blonde\"\n\"woman_darkhair\"\n\n\n\n\n\n","category":"function"},{"location":"functionreference/#TestImages.shepp_logan","page":"Function reference","title":"TestImages.shepp_logan","text":"phantom = shepp_logan(N, [M=N]; high_contrast=true)\n\nOutput the NxM Shepp-Logan phantom, which is a standard test image usually used for comparing image reconstruction algorithms in the field of computed tomography (CT) and magnetic resonance imaging (MRI).\n\nIf the argument M is omitted, the phantom is of size NxN. When setting the keyword argument high_constrast to false, the CT version [1] of the phantom is created. Otherwise, the high contrast MRI version [2] is calculated.\n\nReferences\n\n[1] Shepp, Lawrence A., and Benjamin F. Logan. \"The Fourier reconstruction of a head section.\" IEEE Transactions on nuclear science 21.3 (1974): 21-43.\n\n[2] Toft, Peter Aundal. \"The Radon transform-theory and implementation.\" (1996): 201.\n\n[3] Jain, Anil K. Fundamentals of digital image processing. Prentice-Hall, Inc., (1989): 439.\n\n\n\n\n\n","category":"function"},{"location":"functionreference/#Helpers","page":"Function reference","title":"Helpers","text":"","category":"section"},{"location":"functionreference/","page":"Function reference","title":"Function reference","text":"TestImages.full_imagename","category":"page"},{"location":"functionreference/#TestImages.full_imagename","page":"Function reference","title":"TestImages.full_imagename","text":"fullname = full_imagename(shortname)\n\nGet the first match of shortname in TestImages.remotefiles\n\n\n\n\n\n","category":"function"},{"location":"#TestImages.jl","page":"Home","title":"TestImages.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package provides a convenient Julia interface for loading standard named test images and example images for the internal usage in JuliaImages. This can be used in conjunction with the Images package.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Just like all normal Julia packages, you can use Pkg to install it:","category":"page"},{"location":"","page":"Home","title":"Home","text":"pkg> add TestImages # hit ] to enter Pkg mode","category":"page"},{"location":"","page":"Home","title":"Home","text":"TestImages doesn't support image IO by itself, which means you need to install some backends on your choice, e.g., ImageMagick.jl, QuartzImageIO, OMETIFF.jl.","category":"page"},{"location":"#Usage","page":"Home","title":"Usage","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package currently contains two main functions:","category":"page"},{"location":"","page":"Home","title":"Home","text":"testimage that loads existing image files. Check the list of test images for what's available.\nshepp_logan that generates a phantom image, which is used very widely in image reconstruction experiments.","category":"page"},{"location":"","page":"Home","title":"Home","text":"using TestImages\n\nimg = testimage(\"cameraman.tif\") # fullname\nimg = testimage(\"cameraman\") # without extension works\nimg = testimage(\"cam\") # with only partial name also works","category":"page"},{"location":"","page":"Home","title":"Home","text":"TestImages.shepp_logan(256) # generate the Shepp-Logan phantom image","category":"page"}]
}
